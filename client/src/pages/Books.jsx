import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Accordion } from 'flowbite-react';
import ModalBook from '../components/ModalBook';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { MdEdit, MdDelete } from "react-icons/md";
import { getAuthentication } from '../reducer/AuthenticationSlice';
import { ToastContainer, toast } from 'react-toastify';
import { getCategories } from '../reducer/CategorySlice';
import { getServices } from '../reducer/ServiceSlice';
import { getStaffs } from '../reducer/StaffSlice';
import { AllCategories, AllServices, AllStaffs } from '../action/Book';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authentication = useSelector(getAuthentication);
  const categories = useSelector(getCategories);
  const services = useSelector(getServices);
  const staffs = useSelector(getStaffs);
  const [selectCategoryId, setSelectCategoryId] = useState("");

  useEffect(() => {
    dispatch(AllCategories());
    dispatch(AllServices());
    dispatch(AllStaffs());
  }, [])

  useEffect(() => {
    if (categories.length > 0) {
      setSelectCategoryId(categories[0]._id);
    }
  }, [categories])
  useEffect(() => {
    if (staffs.length > 0) {
      setSelectedStaffValue(staffs[0].staff_name)
    }
  }, [staffs])

  const [openModal, setOpenModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const [headerTitle, setHeaderTitle] = useState("Your appointment");
  const [footerTitle, setFooterTitle] = useState("Select a Date & Time");
  const [modalContentType, setModalContentType] = useState("1");
  const [serviceCheck, setServiceCheck] = useState('');
  const [serviceList, setServiceList] = useState([]);
  const [showModalServiceData, setShowModalServiceData] = useState({});
  const handleRadioChange = (event, data) => {
    setServiceCheck(event.target.value);
    setShowModalServiceData(data);
  };
  const [selectedStaffValue, setSelectedStaffValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedStaffValue(event.target.value);
  };
  const handleButtonClick = () => {
    localStorage.setItem("serviceList", JSON.stringify(serviceList));
    localStorage.setItem("showModalData", JSON.stringify(showModalData));
    // Replace '/new-route' with the desired route you want to navigate to
    navigate('/book-calendar')
  };

  const [showModalData, setShowModalData] = useState({
    "_id": "",
    "bookname": "",
    "duration": 0,
    "price": 0,
    "categoryId": "",
    "availableTime": []
  });

  const onClose = () => {
    setConfirmModal(true);
  }
  const closeConfirmBooking = () => {
    setConfirmModal(false);
    setOpenModal(false);
  }

  const showModal = async (data) => {
    if (authentication) {
      setShowModalData({
        "_id": data._id,
        "bookname": data.bookname,
        "duration": data.duration,
        "price": data.price,
        "categoryId": data.categoryId,
        "availableTime": data.availableTime
      });

      setModalContentType("1");
      setOpenModal(true);
    } else {
      await toast.error('You need to login on the website for booking', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }

  }
  const addService = () => {
    setHeaderTitle("Select another service");
    setModalContentType("2");
  }
  const modalBack = () => {
    setHeaderTitle("Your appointment");
    setModalContentType("1");
  }
  const modalNext2 = () => {
    setHeaderTitle("Select your preferences");
    setModalContentType("3");
  }
  const modalNext3 = () => {
    const data = {
      "staff": selectedStaffValue,
      "_id": showModalServiceData._id,
      "bookname": showModalServiceData.bookname,
      "duration": showModalServiceData.duration,
      "price": showModalServiceData.price,
      "categoryId": showModalServiceData.categoryId,
      "parentId": showModalData._id
    };
    setServiceList(prevServiceList => [...prevServiceList, data]); // Push data into serviceList array
    modalBack();
  }

  return (
    <>
      <section>
        <div className="max-w-7xl text-center mx-auto p-6 lg:px-8">
          <h1 className='w-full text-[26px] sm:text-[36px]'>Our Services</h1>
        </div>
      </section>
      <section>
        <div className='max-w-5xl mx-auto lg:px-8'>
          <Swiper
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper items-center"
          >
            {
              categories.length > 0 && categories.map((cat_data) => (
                <SwiperSlide key={cat_data._id} onClick={() => setSelectCategoryId(cat_data._id)} className="px-6 py-3 cursor-pointer text-center"> {cat_data.category_name} </SwiperSlide>
              ))
            }
          </Swiper>

        </div>
        <div className='max-w-5xl mx-auto p-6 lg:px-8 '>
          {
            services.length > 0 && services.map((data) => {
              if (selectCategoryId == data.categoryId) {
                return <div className='flex flex-wrap px-5 py-8 md:py-12 my-5 md:my-0 items-center border md:border-l-0 md:border-r-0' key={data._id}>
                  <div className='w-full md:w-1/2 cursor-pointer'>
                    <h1 onClick={() => showModal(data)} className='w-full text-[20px] font-bold sm:text-[24px]'> {data.bookname} </h1>
                  </div>
                  <div className='w-full my-5 md:my-0 md:w-1/6'>
                    <p>{data.duration} min</p>
                    <p>£{data.price}</p>
                  </div>
                  <div className='w-full md:w-1/3 text-left md:text-right'>
                    <button
                      type="button"
                      onClick={() => showModal(data)}
                      className="bg-pink text-white  px-12 py-3 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              }
            })
          }

        </div>
      </section>
      <ModalBook openModal={openModal} onClose={onClose} headerTitle={headerTitle} footerTitle={footerTitle} modalContentType={modalContentType} modalBack={modalBack} serviceCheck={serviceCheck} modalNext2={modalNext2} modalNext3={modalNext3} handleButtonClick={handleButtonClick}>
        {
          modalContentType == "1" ? (
            <div className="space-y-6">
              <div className=' w-full border p-5'>
                <p>{showModalData.bookname}</p>
                <p>With {showModalData.bookname} • {showModalData.duration} min • £{showModalData.price} </p>
              </div>
              {
                serviceList.length > 0 && serviceList.map((option) => {
                  if (option.parentId == showModalData._id) {
                    return <div key={option._id} className='w-full flex border p-5'>
                      <div className='w-5/6'>
                        <p>{option.bookname}</p>
                        <p>With {option.staff} • {option.duration} min • £{option.price} </p>
                      </div>
                      <div className='w-1/6 flex gap-1 justify-end items-center'>
                        <div>
                          <MdEdit />
                        </div>
                        <div>
                          <MdDelete />
                        </div>
                      </div>
                    </div>
                  }
                })
              }
              <p className="text-base leading-relaxed">Do you want to add another service to this appointment?</p>
              <Button className="w-full text-black bg-white border-solid border-black" onClick={() => addService()}>
                + Add Service
              </Button>
            </div>
          ) : (modalContentType == "2" ? (
            <Accordion collapseAll>
              {
                categories.length > 0 && categories.map((serviceData) => {
                  return <Accordion.Panel key={serviceData._id} >
                    <Accordion.Title> {serviceData.category_name} </Accordion.Title>
                    <Accordion.Content>
                      {
                        services.map((subServiceData) => {
                          if (serviceData._id == subServiceData.categoryId)
                            return <div className="flex gap-x-3 items-center" key={subServiceData._id}>
                              <input
                                type="radio"
                                id={`push-${subServiceData._id}`}
                                name="push-notifications"
                                value={subServiceData._id}
                                onChange={(e) => handleRadioChange(e, subServiceData)}
                                checked={serviceCheck === subServiceData._id}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label htmlFor={`push-${subServiceData._id}`} className="block text-sm font-medium leading-6 text-gray-900">{subServiceData.bookname} <br /> £ {subServiceData.price}</label>
                            </div>
                        })
                      }
                    </Accordion.Content>
                  </Accordion.Panel>
                })
              }
            </Accordion>
          ) : (
            <div>
              <p>{showModalServiceData.bookname}</p>
              <p>{showModalServiceData.duration} min • from £{showModalServiceData.price} </p>
              <div className="sm:col-span-3 mt-5">
                <label htmlFor="staff" className="block text-sm font-medium leading-6 text-gray-900">Staff</label>
                <div className="mt-2">
                  <select
                    id="staff"
                    name="staff"
                    autoComplete="staff-name"
                    value={selectedStaffValue} // Bind the selected value to the state
                    onChange={handleSelectChange} // Handle the change event
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                    {
                      staffs.map((staffdata) => (
                        <option key={staffdata._id} value={staffdata.staff_name}> {staffdata.staff_name} </option>
                      ))
                    }

                  </select>
                </div>
              </div>
            </div>
          ))
        }


      </ModalBook>

      <Modal show={confirmModal} size="md" onClose={() => setConfirmModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              If you leave now, your appointment won’t be saved.
            </h3>
            <div className="flex justify-center gap-4">
              <Button className="bg-white border-solid border-black text-black" onClick={() => closeConfirmBooking()}>
                {"Leave Booking"}
              </Button>
              <Button className="bg-black text-white" onClick={() => setConfirmModal(false)}>
                Continue Booking
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />


    </>
  );
}

export default Books







