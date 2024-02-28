import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthModal from '../components/AuthModal';
import Presention_img from '../assets/img/presentation.svg';
import { getAuthentication } from '../reducer/AuthenticationSlice';

export default function Home() {
  const authentication = useSelector(getAuthentication);
  const [openModal, setOpenModal] = useState(false);
  const [showAuth, setShowAuth] = useState("signin");

  useEffect(() => {
    localStorage.getItem('token') ? setOpenModal(false) : setOpenModal(true);
  }, [authentication])

  const showSign = () => {
    if (showAuth == "signin") {
      setShowAuth("signup");
    } else {
      setShowAuth("signin");
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <section>
        <div className="max-w-7xl text-center mx-auto p-6 lg:px-8">
          <h1 className='w-full text-[26px] sm:text-[36px]'>Subscribe for 10% off your first treatment with us!</h1>
        </div>
      </section>
      <section >
        <div className='relative max-w-7xl flex flex-col justify-center align-center sm:mx-auto lg:px-8 overflow-hidden'>
          <div className='flex justify-center w-full'>
            <img src="https://static.wixstatic.com/media/f6a3d0_bc95c56662c44bf29fe915cd00119009~mv2.jpg/v1/fill/w_764,h_606,al_c,q_85,enc_auto/f6a3d0_bc95c56662c44bf29fe915cd00119009~mv2.jpg" alt='landing_banner2' className='w-full h-[860px] object-cover hidden md:flex' />
            <img src="https://static.wixstatic.com/media/f6a3d0_bc95c56662c44bf29fe915cd00119009~mv2.jpg/v1/fill/w_459,h_1019,al_c,q_85,enc_auto/f6a3d0_bc95c56662c44bf29fe915cd00119009~mv2.jpg" alt='landing_banner2' className='w-full h-[710px] object-cover md:hidden' />
          </div>
          <div className='w-full absolute bottom-[20px] text-center'>
            <span className='text-white text-[50px] md:text-[65px] font-cursive'>Hello Gorgeous! <br /> Welcome to Chic Aesthetics</span>
            <div className='flex justify-center sm:mt-5 font-sans_serif'>
              <p className='text-white w-2/3'>Chic Aesthetics London has everything you need to keep looking and feeling amazing every single day. From Dermal Fillers to Luxury Facials, treat yourself to one of our bookable pampering services today.</p>
            </div>
            <br />
            <div className='sm:mt-5 sm:mb-12 font-sans_serif flex justify-center'>
              <p className='text-white md:w-full sm:w-[550px] w-[270px] '>If your unsure of what treatment would be suitable please get in touch today via Instagram DM.</p>
            </div>
            <div className='sm:mt-5 mt-3 flex justify-center'>
              <div className=' w-full md:w-[630px] mx-5 bg-sans shadow-custom-shadow px-2 md:px-[150px] py-[10px] font-sans_serif font-bold'>
                <span>COVID VACCINE - It is advised not to have fillers two weeks before and three weeks after having the vaccine. Please be mindful of this when booking your treatment.</span>
                <br /><br />
                <span >BOOSTER Vaccine - Please leave 4 weeks either side before doing injectables.</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className='w-full flex justify-center font-sans_serif text-[14px]'>
            <div className='flex w-full sm:w-[500px] lg:w-[980px] flex-wrap gap-3 justify-between'>
              <div className=' w-full sm:w-[230px] flex flex-col  text-center bg-pink px-5 pt-5 pb-[50px] mt-[-10px] mb-5 z-10 text-brown' >
                <img src={Presention_img} alt="Presention_img" className='w-[40px] h-[40px] mx-auto mt-5 mb-[40px]' />
                <p>" Lovely professional service, cant wait to come back for my top up x "</p>
              </div>
              <div className=' w-full sm:w-[230px] h-auto flex flex-col  text-center bg-pink px-5 pt-5 pb-[50px] mt-[-10px] mb-5 z-10 text-brown' >
                <img src={Presention_img} alt="Presention_img" className='w-[40px] h-[40px] mx-auto mt-5 mb-[40px]' />
                <p>"The best at doing lips!"</p>
              </div>
              <div className=' w-full sm:w-[230px] flex flex-col  text-center bg-pink px-5 pt-5 pb-[50px] mt-[-10px] mb-5 z-10 text-brown' >
                <img src={Presention_img} alt="Presention_img" className='w-[40px] h-[40px] mx-auto mt-5 mb-[40px]' />
                <p>"Very professional and friendly, absolutely love my lips and will definitely be back!!!x ."</p>
              </div>
              <div className=' w-full sm:w-[230px] flex flex-col  text-center bg-pink px-5 pt-5 pb-[50px] mt-[-10px] mb-5 z-10 text-brown' >
                <img src={Presention_img} alt="Presention_img" className='w-[40px] h-[40px] mx-auto mt-5 mb-[40px]' />
                <p>"Love my fillers so much they look amazing and your so lovely x."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-pink'>
        <div className="max-w-7xl flex justify-center mx-auto mt-5">
          <div className='w-[523px] bg-white px-6 pt-6 mx-5'>
            <span className='text-[26px]'>Contact Us</span>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Write a message
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-pink mt-5 px-12 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>

        </div>
        <div className='w-full flex justify-center mt-3'>
          <img src="https://static.wixstatic.com/media/f6a3d0_14196dbbff23421fb748c8e8e36fcdf0~mv2.jpg/v1/fill/w_720,h_345,al_c,q_80,enc_auto/lips%20r_edited.jpg" alt="" className='lg:h-[450px]' />
        </div>
        <div className='w-full flex justify-center mt-6'>
          <img src="https://static.wixstatic.com/media/f6a3d0_6985f35bff68494d98671c58ec122c4a~mv2.jpg/v1/fill/w_720,h_345,al_c,q_80,enc_auto/nose_edited_edited.jpg" alt="" className='lg:h-[450px]' />
        </div>
        <div className='w-full flex justify-center mt-6'>
          <img src="https://static.wixstatic.com/media/f6a3d0_2f536cff5cca4351b5c5aecda67665e3~mv2.jpg/v1/fill/w_940,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fat.jpg" alt="" className='lg:h-[450px]' />
        </div>
        <div className='w-full flex justify-center mt-6'>
          <img src="https://static.wixstatic.com/media/f6a3d0_5a7128f177e24d14bbdd0c9719e02950~mv2.png/v1/fill/w_720,h_345,al_c,q_85,enc_auto/botox%201.png" alt="" className='lg:h-[450px]' />
        </div>
      </section>
      <div className='px-5'>
        <AuthModal openModal={openModal} onClose={onCloseModal} showAuth={showAuth} showSign={showSign} />
      </div>




    </>
  )
}