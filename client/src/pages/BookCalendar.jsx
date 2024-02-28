import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Datepicker } from 'flowbite-react';

const BookCalendar = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const Dateoptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const [formattedDate, setFormattedDate] = useState(currentDate.toLocaleDateString('en-US', Dateoptions));
  const [timeSheet, setTimeSheet] = useState("hidden");
  const [selectedTimeSheet, setSelectedTimeSheet] = useState(null);
  const [selectNext, setSelectNext] = useState(false);
  const [timeSheetList, setTimeSheetList] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const selectService = JSON.parse(localStorage.getItem("showModalData"));
  const CheckAvailable = () => {
    setTimeSheet("");
  }
  const handleTimeSheetClick = (index, time) => {
    setSelectedTimeSheet(index);
    setSelectNext(true);
    setSelectedTime(time);
  }
  const GoToDetail = () => {
    const data = {
      "BookingTime": selectedTime,
      "day": selectedDay
    }
    localStorage.setItem("selectedTime", JSON.stringify(data));
    navigate('/book-detail');
  }
  const handleDateChange = (selectedDate) => {
    setFormattedDate(selectedDate.toLocaleDateString('en-US', Dateoptions));
    setSelectedDay(selectedDate);
    setTimeSheetList([]);
    setTimeSheet("hidden");
    setSelectNext(false);
    setSelectedTimeSheet(null);
    const ModalData = JSON.parse(localStorage.getItem("showModalData"));
    let availableTimeList = ModalData.availableTime;
    let date1 = new Date(selectedDate);
    for (var i = 0; i < availableTimeList.length; i++) {
      let date2 = new Date(availableTimeList[i]);
      if (date1.toDateString() === date2.toDateString()) {
        let hours = date2.getHours();
        let minutes = date2.getMinutes();
        let time = hours + " : " + minutes;
        let data = {
          "time": time,
          "BookingTime": date2
        }
        setTimeSheetList(prevServiceList => [...prevServiceList, data])
      }
    }
  }

  return (
    <div className='max-w-5xl mx-auto flex md:flex-nowrap flex-wrap  gap-3 p-6 lg:px-8'>
      <div className='w-full md:w-1/3 mb-6'>
        <h1 className='w-full text-[18px] border-b-2 text-center pb-2 border-gray-500 sm:text-[20px]'>Select a Date and Time</h1>
        <Datepicker inline showTodayButton={false} showClearButton={false} onSelectedDateChanged={(e) => handleDateChange(e)} />
      </div>
      <div className='w-full md:w-1/3 mb-6'>
        <h1 className='w-full text-[18px] border-b-2 text-center pb-2 border-gray-500 sm:text-[20px] mb-5'>Select a Date and Time</h1>
        <p> {formattedDate} </p>
        <div className={`w-full grid grid-cols-2 ${timeSheet} mt-5 gap-3`}>
          {
            timeSheetList.length > 0 && timeSheetList.map((timeData, index) => (
              <div
                key={index}
                onClick={() => handleTimeSheetClick(index, timeData.BookingTime)}
                className={`w-full py-2 border-solid  border-2 text-center cursor-pointer 
                 ${selectedTimeSheet === index ? 'border-pink' : ''} `}>
                {timeData.time}
              </div>
            ))
          }
        </div>
        <div className={`w-full py-2 text-center ${timeSheet}`}>
          {
            timeSheetList.length == 0 && (
              <>
                <p>Don't have available time. </p>
                <p>Please select the other day.</p>
              </>
            )
          }
        </div>
        <Button className={`w-full bg-pink ${timeSheet ? '' : 'hidden'} mt-5`} onClick={() => CheckAvailable()}>
          Check Next Availability
        </Button>
      </div>
      <div className='w-full md:w-1/3 mb-6'>
        <h1 className='w-full text-[18px] border-b-2 text-center pb-2 border-gray-500 sm:text-[20px] mb-5'>Booking Details</h1>
        <p> {selectService.bookname} </p>
        <Button disabled={!selectNext} className="w-full bg-black text-white mt-5" onClick={() => GoToDetail()}>
          Next
        </Button>
      </div>
    </div>

  )
}

export default BookCalendar