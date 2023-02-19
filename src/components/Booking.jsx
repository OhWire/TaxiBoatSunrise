import React, { useState, useEffect } from 'react';
import './Booking.css'


function Booking() {
  const [route, setRoute] = useState('');
  const [date, setDate] = useState('');
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    // Here's where you would retrieve the available times for the selected route and date
    // In this example, we'll just generate some dummy times
    const availableTimes = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

    // Here's where we'll count how many bookings there are for each tour time
    const bookings = {};

    // Here's where we'll filter out times that are already fully booked
    const filteredTimes = availableTimes.filter(time => {
      if (!bookings[time]) {
        bookings[time] = 1;
        return true;
      } else if (bookings[time] < 6) {
        bookings[time]++;
        return true;
      } else {
        return false;
      }
    });

    setTimes(filteredTimes);
  }, [route, date]);

  const handleSubmit = event => {
    event.preventDefault();
    // Here's where you would submit the booking data to your backend
  };

  return (
    <div className='Booking-container'>
    <form onSubmit={handleSubmit} className='booking-container'>
      <label htmlFor="route">Select a <span className='gradient'>Route</span>:</label>
      <select className='input' id="route" value={route} onChange={event => setRoute(event.target.value)}>
        <option value="">-- Please select a route --</option>
        <option value="Route 1">Caminha to "OPTION-1" Single</option>
        <option value="Route 2">Caminha to "OPTION-1" Return</option>
        <option value="Route 3">Caminha to "OPTION-2" Single</option>
        <option value="Route 3">Caminha to "OPTION-2" Return</option>
      </select>

      <br /><br />

      <label htmlFor="date">Select a <span className='gradient'>Date</span>:</label>
      <input type="date" id="date" value={date} onChange={event => setDate(event.target.value)} />

      <br /><br />

      <label htmlFor="time">Select a <span className='gradient'>Time</span>:</label>
      <select   id="time" value={selectedTime} onChange={event => setSelectedTime(event.target.value)}>
        <option  value="">-- Please select a time --</option>
        {times.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <br /><br />
    </form>
    </div>
  );
}

export default Booking;
