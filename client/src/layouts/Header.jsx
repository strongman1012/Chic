import { useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import Button from '../components/Button';
import AuthModal from '../components/AuthModal';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthentication, setAuthentication } from '../reducer/AuthenticationSlice';
import { toast } from 'react-toastify';
export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const authentication = useSelector(getAuthentication);
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showAuth, setShowAuth] = useState("signin");

  useEffect(() => {
    if (authentication) {
      setOpenModal(false);
    }
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
  }

  const handleLogin = (e) => {
    setOpenModal(true);
    setShowAuth(e);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setAuthentication({ authentication: false }));
    toast.success("Successfully logout!")
  }


  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex lg:flex mr-10 max-[1100px]:mx-auto">
          <a href="#" className="uppercase -m-1.5 p-1.5 font-cursive_head font-black max-[768px]:font-bold  text-[20px]  leading-[31.2px]">
            Chic Aesthetics London™
          </a>
        </div>

        <Popover.Group className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-9 mr-[80px] max-[1100px]:mr-3">
          <a href="/" className={`flex items-center gap-x-1 text-sm leading-6 ${currentPath === '/' || currentPath === '/home' ? 'font-bold' : ''} `}>
            Home
          </a>
          <a href="/faq" className={`text-sm leading-6 ${currentPath === '/faq' ? 'font-bold' : ''}`}>
            FAQ's
          </a>
          <a href="/book" className={`text-sm leading-6 ${currentPath === '/book' ? 'font-bold' : ''}`}>
            Book Online
          </a>
          <a href="/terms" className={`text-sm leading-6 ${currentPath === '/terms' ? 'font-bold' : ''}`}>
            Terms and Conditions
          </a>
        </Popover.Group>
        {
          authentication ? (<div className=" hidden lg:flex lg:gap-x-1">
            <Button
              label="Logout"
              textColor="white"
              variant="primary"
              size="small"
              fontWeight="normal"
              onChange={() => handleLogout()}
            />
          </div>) : (
            <div className=" hidden lg:flex lg:gap-x-1">
              <Button
                label="Login"
                textColor="white"
                variant="primary"
                size="small"
                fontWeight="normal"
                onChange={() => handleLogin("signin")}
              />
              <Button
                label="Register"
                textColor="white"
                variant="primary"
                size="small"
                fontWeight="normal"
                onChange={() => handleLogin("signup")}
              />
            </div>
          )
        }

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-[#060508] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <a
                        href="/"
                        className={`flex w-full text-white items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7  ${currentPath === '/' || currentPath === '/home' ? 'font-bold' : ''} `}
                      >
                        Home
                      </a>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/faq"
                  className={`-mx-3 block text-white rounded-lg px-3 py-2 text-base  leading-7 ${currentPath === '/faq' ? 'font-bold' : ''} `}
                >
                  FAQ's
                </a>
                <a
                  href="/book"
                  className={`-mx-3 block rounded-lg text-white px-3 py-2 text-base  leading-7 ${currentPath === '/book' ? 'font-bold' : ''} `}
                >
                  Book Online
                </a>
                <a
                  href="/terms"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-white text-base  leading-7 ${currentPath === '/terms' ? 'font-bold' : ''} `}
                >
                  Terms and Conditions
                </a>
              </div>
              {
                authentication ? (
                  <div className="py-6 flex gap-x-1">
                    <Button
                      label="Logout"
                      textColor="white"
                      variant="primary"
                      size="small"
                      fontWeight="normal"
                      onChange={() => handleLogout()}
                    />
                  </div>
                ) : (
                  <div className="py-6 flex gap-x-1">
                    <Button
                      label="Login"
                      textColor="white"
                      variant="primary"
                      size="small"
                      fontWeight="normal"
                      onChange={() => handleLogin("signin")}
                    />
                    <Button
                      label="Register"
                      textColor="white"
                      variant="primary"
                      size="small"
                      fontWeight="normal"
                      onChange={() => handleLogin("signup")}
                    />
                  </div>
                )
              }

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <div className='px-5'>
        <AuthModal openModal={openModal} onClose={onCloseModal} showAuth={showAuth} showSign={showSign} />
      </div>
    </header>
  )
}
