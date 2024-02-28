import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import queryString from 'query-string';
import CartImage from '../assets/img/cart.png';
import { CLIENT_ID } from '../config/config';
import StripeCheckout from "./stripePayment";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../action/Book';
const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalInfo, setPersonalInfo] = useState("hidden")
  const [showMore, setShowMore] = useState(null);
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("CartList")));
  const [subtotal, setSubtotal] = useState(null);
  const [payNow, setPayNow] = useState(null);
  const [payLater, setPayLater] = useState(null);
  const [showOrder, setShowOrder] = useState(false);

  const MoreDetails = (i) => {
    setShowMore(i);
  }
  const LessDetails = (i) => {
    setShowMore(null);
  }
  useEffect(() => {
    let price = 0;
    let Nprice = 0;
    cartData && cartData.length > 0 && cartData.map((data) => {
      price += data.Tprice;
      Nprice += data.Nprice;
    })
    setSubtotal(price);
    setPayNow(Nprice);
    setPayLater(price - Nprice);
  }, [cartData])
  const handlePersonalInfo = () => {
    if (!firstName || !lastName || !email || !phoneNumber) {
      toast.error('You should enter all information.');
      return
    }
    setPersonalInfo("");
    setShow(true);
    let data = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "phoneNumber": phoneNumber
    };
    if (queryParams.get('payment')) {
      data = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phoneNumber": phoneNumber,
        "payment": "success"
      }
      setShow(false);
      setShowOrder(true);
    }
    const setUrl = "?" + queryString.stringify(data, { skipEmptyString: true });
    navigate(setUrl);
  }
  const handleEditPersonalInfo = () => {
    setPersonalInfo("hidden");
    setShow(false);
  }

  //Paypal payment part
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [showStripe, setShowStripe] = useState(false);
  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Sunflower",
          amount: {
            currency_code: "USD",
            value: payNow,
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      toast.success('Payment successful!');
      setShowOrder(true);
      setShow(false);
      const data = {
        "firstName": queryParams.get('firstName') ? queryParams.get('firstName') : '',
        "lastName": queryParams.get('lastName') ? queryParams.get('lastName') : '',
        "email": queryParams.get('email') ? queryParams.get('email') : '',
        "phoneNumber": queryParams.get('phoneNumber') ? queryParams.get('phoneNumber') : '',
        "payment": "success"
      };
      const setUrl = "?" + queryString.stringify(data, { skipEmptyString: true });
      navigate(setUrl);
      console.log('Order successful . Your order id is--', orderID);
    }

  }, [success]);


  useEffect(() => {
    setFirstName(queryParams.get('firstName') ? queryParams.get('firstName') : '');
    setLastName(queryParams.get('lastName') ? queryParams.get('lastName') : '');
    setEmail(queryParams.get('email') ? queryParams.get('email') : '');
    setPhoneNumber(queryParams.get('phoneNumber') ? queryParams.get('phoneNumber') : '');
    if (queryParams.get('firstName')) {
      setPersonalInfo("");
      setShow(true);
    }
    if (queryParams.get('payment')) {
      setShow(false);
      setShowOrder(true);
    }
    if (queryParams.get('successed')) {
      setShow(false);
      setShowOrder(true);
      toast.success('Payment successful!');
      const data = {
        "firstName": queryParams.get('firstName') ? queryParams.get('firstName') : '',
        "lastName": queryParams.get('lastName') ? queryParams.get('lastName') : '',
        "email": queryParams.get('email') ? queryParams.get('email') : '',
        "phoneNumber": queryParams.get('phoneNumber') ? queryParams.get('phoneNumber') : '',
        "payment": "success"
      };
      const setUrl = "?" + queryString.stringify(data, { skipEmptyString: true });
      navigate(setUrl);
    }
  }, [])

  const handlePlaceOrder = () => {
    const additional = JSON.parse(localStorage.getItem("Additional"));
    let data = {
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
      "cartData": cartData,
      "addNote": additional.addNote?additional.addNote:'',
      "promoCode": additional.promoCode?additional.promoCode:''
    }
    dispatch(placeOrder(data));
    setTimeout(() => {
      navigate("/")
    }, 10000);
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-row-reverse md:flex-nowrap flex-wrap  gap-8 p-0 sm:p-6 lg:px-8">
      <div className="w-full md:w-6/15 p-5 bg-gray-200">
        <div className="w-full flex justify-between items-center py-3">
          <h1 className='text-[18px] font-bold sm:text-[20px]'>Order summary(4)</h1>
          <a href="/book-cart">Edit Cart</a>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-2" />
        <div className="w-full max-h-[50vh] md:max-h-[35vh] py-3 overflow-y-auto">
          {
            cartData.length > 0 && cartData.map((itemData, i) => (
              <div key={i} className="w-full flex py-3">
                <div className="w-[60px] h-[60px] bg-black flex flex-shrink-0 items-center justify-center">
                  <img src={CartImage} alt="cartImg" className="w-[33px] h-[33px]" />
                </div>
                <div className="flex-grow flex flex-wrap sm:flex-nowrap px-5">
                  <div className="w-3/4 sm:mb-0">
                    <p className="font-bold mb-3"> {itemData.bookname} </p>
                    <p className="text-sm">£{itemData.Tprice}</p>
                    <div onClick={() => MoreDetails(i)} className={`flex items-center text-sm cursor-pointer ${showMore === i ? 'hidden' : ''}`}>
                      <p>More Details &nbsp;</p>
                      <MdOutlineExpandMore className="text-[20px]" />
                    </div>
                    <div className={`${showMore === i ? '' : 'hidden'} `}>
                      <p className="text-sm leading-7">{moment(itemData.bookingTime).format("dddd, MMMM D, YYYY [at] h:mm A")}</p>
                      <p className="text-sm leading-7">{itemData.duration} min</p>
                      <p className="text-sm leading-7">{itemData.bookname}</p>
                      <p className="text-sm leading-7">Catford, London, UK</p>
                      <div onClick={() => LessDetails(i)} className="flex items-center text-sm cursor-pointer leading-8">
                        <p>Less Details&nbsp;</p>
                        <MdExpandLess className="text-[20px]" />
                      </div>
                    </div>

                  </div>
                  <div className="w-1/4 text-right">
                    <p>£{itemData.Tprice}</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <div className="w-full h-[2px] bg-gray-500 my-2" />
        <div className="w-full py-3 leading-8">
          <div className="w-full flex justify-between">
            <p>Subtotal</p>
            <p>£{subtotal}</p>
          </div>
          <div className="w-full flex justify-between">
            <p>VAT</p>
            <p>£0.00</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-2" />
        <div className="w-full py-3 leading-8">
          <div className="w-full flex justify-between">
            <p>Total</p>
            <p>£{subtotal}</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-2" />
        <div className="w-full py-3 leading-8">
          <div className="w-full flex justify-between">
            <p>Pay Now</p>
            <p>£{payNow}</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-sm">Pay Later</p>
            <p >£{payLater}</p>
          </div>
        </div>

      </div>
      <div className="w-full md:w-8/15 p-5">
        <div className='w-full'>
          <div className="flex justify-between items-center">
            <span className='text-[26px]'>Customer details</span>
            <span onClick={() => handleEditPersonalInfo()} className={`${personalInfo} cursor-pointer`}>Edit</span>
          </div>
          <div className={`${personalInfo} leading-8 mt-5`}>
            <p>
              <span> {firstName} </span> &nbsp; <span> {lastName} </span>
            </p>
            <p> {email} </p>
            <p> {phoneNumber} </p>
          </div>
          <div className={`${personalInfo === 'hidden' ? '' : 'hidden'}`}>
            <div className="w-full mt-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email for order confirmation
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full mt-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="phone-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => handlePersonalInfo()}
              className="bg-black text-white w-full mt-5 px-12 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="w-full mb-5">
            <span className='text-[26px]'>Payment</span>
          </div>

          {show ? (
            <>
              <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              </PayPalScriptProvider>
              <StripeCheckout payNow={payNow} />
            </>
          ) : null}

        </div>
        <div className="w-full mt-5">
          <div className="w-full mb-5">
            <span className='text-[26px]'>Review & place order</span>
          </div>
          {
            showOrder ? (
              <div className="w-full">
                <button onClick={() =>handlePlaceOrder()} className="w-full text-sm bg-black text-white p-3 mt-6 mb-2">Place Order</button>
              </div>
            ) : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Checkout;