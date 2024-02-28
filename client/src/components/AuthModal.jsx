
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Modal } from 'flowbite-react';
import { register, login } from '../action/Auth';

import { getAuthentication } from '../reducer/AuthenticationSlice';

const AuthModal = (props) => {
  const dispatch = useDispatch();
  const authentication = useSelector(getAuthentication);
  const { openModal, onClose, showAuth, showSign } = props;
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [showCon, setShowCon] = useState("hidden");

  const Register = () => {
    if (signupPassword != conPassword || signupPassword == "") {
      setShowCon("");
      setConPassword("");
      return;
    }
    const data = {
      "email": signupEmail,
      "password": signupPassword,
      "con_password": conPassword,
    }
    dispatch(register(data));
  }
  const Login = async () => {
    const data = {
      "email": signinEmail,
      "password": signinPassword,
    }
    await dispatch(login(data));
    if (authentication) {
      onClose;
    }

  }
  return (
    <div>
      <Modal dismissible show={openModal} size="4xl" onClose={onClose} popup className='px-1' >
        <Modal.Header className='bg-pink' />
        <Modal.Body className='bg-pink pt-5'>
          <section className='w-full flex flex-wrap'>
            <div className='w-full md:w-1/2 sm:px-5 mb-5'>
              {showAuth == "signin" ? (
                <>
                  <h1 className='w-full text-[20px] text-center  md:text-[24px]'>Be the first to find out about our discounted Model Slots!</h1>
                  <p className='mt-5 text-justify text-sans111'>Subscribe to our newsletter to receive news and updates. These treatments are carried out by our students under supervision!</p>
                  <div className="flex mt-5 flex-1 flex-col justify-center">
                    <div className="sm:mx-auto sm:w-full">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              required
                              value={signinEmail}
                              onChange={(e) => setSigninEmail(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                              Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              type="password"
                              required
                              value={signinPassword}
                              onChange={(e) => setSigninPassword(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="button"
                            onClick={() => Login()}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                      <p className="mt-2 text-center text-sm text-gray-500">

                        <a onClick={showSign} className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500">
                          Don't have an account? Register Now
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className='w-full text-[20px] text-center  md:text-[24px]'>Be the first to find out about our discounted Model Slots!</h1>
                  <div className="flex mt-5 flex-1 flex-col justify-center">
                    <div className="sm:mx-auto sm:w-full">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              required
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                              Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              type="password"
                              required
                              value={signupPassword}
                              onChange={(e) => setSignupPassword(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                              Confirm Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              type="password"
                              required
                              value={conPassword}
                              onChange={(e) => setConPassword(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <p className={`font-semibold pl-2 ${showCon} cursor-pointer leading-6 text-red-600`}>Confirm password is not correct</p>
                          </div>
                        </div>

                        <div>
                          <button
                            type="button"
                            onClick={() => Register()}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                      <p className="mt-2 text-center text-sm text-gray-500">

                        <a onClick={showSign} className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500">
                          Go to Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              )}

            </div>
            <div className='w-full md:w-1/2 px-2'>
              <img src="https://static.wixstatic.com/media/f6a3d0_26756851c09c44a0aeb3896d916b031d~mv2.jpg/v1/crop/x_0,y_395,w_1687,h_1980/fill/w_409,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/content_edited.jpg" alt="login-image" className='w-full' />
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>

  )
}

export default AuthModal