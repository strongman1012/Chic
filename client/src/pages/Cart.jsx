import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { MdClose } from "react-icons/md";
import moment from 'moment';
import CartImage from '../assets/img/cart.png';

const Cart = () => {
  const navigate = useNavigate();
  const [CartList, setCartList] = useState(JSON.parse(localStorage.getItem("CartList")));
  const [subtotal, setSubtotal] = useState(null);
  const [payNow, setPayNow] = useState(null);
  const [payLater, setPayLater] = useState(null);
  const [addNote, setAddNote] = useState("");
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    let price = 0;
    let Nprice = 0;
    CartList && CartList.length > 0 && CartList.map((data) => {
      price += data.Tprice;
      Nprice += data.Nprice;
    })
    setSubtotal(price);
    setPayNow(Nprice);
    setPayLater(price - Nprice);
  }, [CartList])
  const GoToCheckout = () => {
    const data = {
      "addNote": addNote,
      "promoCode": promoCode
    }
    localStorage.setItem("Additional", JSON.stringify(data));
    navigate('/book-checkout');
  }
  const handleClose = (id, time) => {
    const filteredData = CartList.filter(item => item.serviceId !== id && item.bookingTime !== time);
    localStorage.setItem("CartList", JSON.stringify(filteredData));
    setCartList(filteredData);
  }
  const handleAddNote = (e) => {
    setAddNote(e.target.value);
  }

  return (
    <div className='max-w-5xl mx-auto flex md:flex-nowrap flex-wrap  gap-12 p-6 lg:px-8'>
      <div className="w-full md:w-2/3 mb-6">
        <h1 className='w-full text-[18px] font-bold pt-4 sm:text-[20px]'>My Cart</h1>
        <div className="w-full mt-5 border-t border-b divide-y">
          {
            CartList && CartList.length > 0 && CartList.map((cartData, i) => (
              <div className="w-full flex gap-3 py-8" key={i}>
                <div className="flex-grow flex">
                  <div className="w-[100px] h-[100px] bg-black flex flex-shrink-0 items-center justify-center">
                    <img src={CartImage} alt="cartImg" className="w-[50px] h-[50px]" />
                  </div>
                  <div className="flex-grow flex flex-wrap sm:flex-nowrap pl-5">
                    <div className="w-full sm:w-2/3 mb-5 sm:mb-0">
                      <p className="font-bold mb-3"> {cartData.bookname} </p>
                      <p className="text-sm">£ {cartData.Tprice} </p>
                      <p className="text-sm">{moment(cartData.bookingTime).format("dddd, MMMM D, YYYY [at] h:mm A")} </p>
                      <p className="text-sm"> {cartData.duration} min </p>
                      <p className="text-sm">{cartData.bookname}</p>
                      <p className="text-sm">Catford, London, UK</p>
                    </div>
                    <div className="w-full sm:w-1/3 sm:text-center">
                      <p>£ {cartData.Tprice}</p>
                    </div>
                  </div>
                </div>
                <div className="w-[30px] ">
                  <MdClose onClick={() => handleClose(cartData.serviceId, cartData.bookingTime)} className="cursor-pointer" />

                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full mt-5">
          <label htmlFor="instagram" className="block font-medium leading-6 text-gray-900">
            Enter a promo code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="instagram"
              id="instagram"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              autoComplete="instagram-id"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <label htmlFor="about" className="block font-medium leading-6 text-gray-900">
            Add Note
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              value={addNote}
              onChange={(e) => handleAddNote(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <h1 className='w-full text-[18px] font-bold border-b border-solid pt-4 pb-5 sm:text-[20px]'>Order Summary</h1>

        <div className="w-full">
          <div className="w-full flex justify-between items-center py-3 mt-3 border-b border-solid">
            <h1 className='w-full text-[18px] sm:text-[20px]'>Subtotal</h1>
            <p>£{subtotal}</p>
          </div>
          <div className="w-full flex justify-between items-center py-3 mt-3">
            <h1 className='w-full text-[18px] sm:text-[20px]'>Pay Now</h1>
            <p>£{payNow}</p>
          </div>
          <div className="w-full flex justify-between py-3">
            <p>Pay Later</p>
            <p>£{payLater}</p>
          </div>
        </div>
        <div className="w-full">
          <Button onClick={GoToCheckout} className="w-full bg-pink text-white mt-5" >
            Checkout
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Cart