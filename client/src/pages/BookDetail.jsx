import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Button, Modal } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';

const BookDetail = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState("");
    const [instagramUserName, setInstagramUserName] = useState("");
    const bookingData = JSON.parse(localStorage.getItem("showModalData"));
    const bookingTime = JSON.parse(localStorage.getItem("selectedTime"));
    const Dateoptions = { weekday: 'long', day: 'numeric', month: 'long' };
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const AllServiceList = JSON.parse(localStorage.getItem("serviceList"));
    const Hours = new Date(bookingTime.BookingTime).getHours();
    const Minutes = new Date(bookingTime.BookingTime).getMinutes();

    const [CatalogList, setCatalogList] = useState([]);
    useEffect(() => {
        setCatalogList([]);
        AllServiceList && AllServiceList.length > 0 && AllServiceList.map((data) => {
            if (data.parentId == bookingData._id) {
                setCatalogList(prevServiceList => [...prevServiceList, data]);
            }
        })
    }, [])
    const day = new Date(bookingTime.day).toLocaleDateString('en-US', Dateoptions);

    const GoToCart = () => {
        setOpenModal(false);
        navigate('/book-cart');
    }
    const GoToBook = () => {
        setOpenModal(false);
        navigate('/book');
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const AddToCart = () => {
        let PushData = [];
        let CartList = JSON.parse(localStorage.getItem("CartList"));
        const data = {
            "userId": userInfo._id,
            "serviceId": bookingData._id,
            "bookname": bookingData.bookname,
            "Tprice": bookingData.price,
            "Lprice": bookingData.price - 30,
            "Nprice": 30,
            "duration": bookingData.duration,
            "bookingTime": bookingTime.BookingTime,
            "catalogList": CatalogList,
            "message": message,
            "instagramUserName": instagramUserName,
            "email": userInfo.email
        }
        if (CartList) {
            const filteredData = CartList.filter(item => item.serviceId === bookingData._id && item.bookingTime === bookingTime.BookingTime);
            if (filteredData && filteredData.length > 0) {
                toast.error('You already have this session in your cart. Please go back and make another selection.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return
            }
            PushData = CartList;
            PushData.push(data);
            localStorage.setItem("CartList", JSON.stringify(PushData));
        } else {

            PushData.push(data);
            localStorage.setItem("CartList", JSON.stringify(PushData));
        }
        setOpenModal(true);
    }

    return (
        <div className='max-w-5xl mx-auto flex md:flex-nowrap flex-wrap  gap-3 p-6 lg:px-8'>
            <div className="w-full md:w-2/3 mb-6">
                <h1 className='w-full text-[18px] font-bold border-b-2 text-center py-4 border-gray-500 sm:text-[20px]'>Your details</h1>
                <div className="w-full mt-5 leading-8">
                    <p className="font-bold py-3">Tell us a bit about yourself</p>
                    <p className="py-2">Email: naruto991223@gmail.com</p>
                </div>
                <div className="w-full mt-5">
                    <label htmlFor="about" className="block font-medium leading-6 text-gray-900">
                        Add Your Message
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            value={message}
                            onChange={(e) => handleMessage(e)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <label htmlFor="instagram" className="block font-medium leading-6 text-gray-900">
                        Instagram Username *
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="instagram"
                            id="instagram"
                            value={instagramUserName}
                            onChange={(e) => setInstagramUserName(e.target.value)}
                            autoComplete="instagram-id"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <Accordion collapseAll>
                    <Accordion.Panel>
                        <Accordion.Title>Booking Details</Accordion.Title>
                        <Accordion.Content className="leading-8">
                            <p> {bookingData.bookname} </p>
                            <p> {day} at {Hours} : {Minutes}</p>
                            <p></p>
                            <p>{bookingData.duration} min</p>
                            <p> £{bookingData.price} </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
                <div className="w-full px-5 py-5 bg-gray-200 mt-5">
                    <p className="font-bold">Payment  Details</p>
                    <div className="w-full flex justify-between pt-5 pb-3">
                        <p>Total</p>
                        <p>£{bookingData.price}</p>
                    </div>
                    <div className="w-full flex justify-between py-3">
                        <p>Pay Now (Deposit)</p>
                        <p>£30</p>
                    </div>
                    <div className="w-full flex justify-between py-3">
                        <p>Pay Later</p>
                        <p>£{bookingData.price - 30}</p>
                    </div>
                </div>
                <div className="w-full">
                    <Button onClick={() => AddToCart()} className="w-full bg-gray-400 text-white mt-5" >
                        Add to Cart
                    </Button>
                </div>
                <div className="w-full mt-5">
                    <Accordion collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title>Cancellation Policy</Accordion.Title>
                            <Accordion.Content>
                                <p className="text-justify">We have a strict 48 hour cancellation policy. For cancellations within 48 hours of your appointment, the booking fee will be lost without refund & will not be able to be used for a new appointment. If there is a no show, the booking fee will be taken without refund and will not be able to be used to reschedule a new appointment. When booking with chic aesthetics, you agree to the terms and condition's.</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>


            </div>
            <Modal dismissible show={openModal} onClose={GoToCart}>
                <Modal.Header>Session added to cart</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Fat Dissolving - 4 sessions
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            2 March 2024 at 11:00
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-full flex flex-wrap sm:flex-nowrap gap-3">
                        <Button onClick={GoToCart} className="w-full sm:w-1/2 bg-white border-solid border-black text-black">View Cart</Button>
                        <Button className="w-full sm:w-1/2 bg-black text-white" onClick={GoToBook}>
                            Continue Browsing
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
            <ToastContainer />

        </div>
    )
}

export default BookDetail