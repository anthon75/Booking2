import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { PiAirplaneLandingLight } from "react-icons/pi";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";




export function FlightForm() {
  const router = useRouter();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
    });

    router.push(`/flights?${queryParams.toString()}`);

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-2 pl-[40%]">Flight Booking</h2>
      <div className="grid grid-cols-2 gap-[20px] ">
        <div>
          <label htmlFor="Departure">Departure</label>
          <div className="flex items-center gap-4 bg-white p-2 h-[37px] pl-[20px] rounded-[14px] ">
            <PiAirplaneTiltLight />
            <input
              className="block mb-2 p-2 outline-none"
              type="text"
              placeholder="From where?"
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="arrival" className="block text-sm font-medium mb-1">
            Arrival
          </label>
          <div className="flex items-center gap-4 bg-white h-[37px] p-2 pl-[20px] rounded-[14px] border-[#f1f2f1]">
            <PiAirplaneLandingLight />
            <input
              className="block mb-2 p-2 outline-none"
              onChange={(e) => setDestination(e.target.value)}
              required
              type="text"
              placeholder="To where?"
            />
          </div>
        </div>
      </div>
      <div className="mb-4 ">
        <div className="flex gap-[40px] mt-[10px]">
          <div>
            <label htmlFor="myInput">Departure Date</label>
            <div className="flex items-center bg-white gap-[20px] h-[35px] w-[450px] pl-[20px] rounded-[15px]">
              <CiCalendarDate />
              <input
                id="Input"
                className="outline-none"
                type="date"
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                placeholder="Select date"
              />
            </div>
          </div>
          <div>
            <label htmlFor="myInput">Arrival Date</label>
            <div className="flex items-center gap-4 bg-white p-1.5  w-[400px] pl-[20px] rounded-[15px]">
              <CiCalendarDate />
              <input
                id="Input"
                className="outline-none"
                type="date"
                onChange={(e) => setReturnDate(e.target.value)}
                required
                placeholder="Select date"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="passengers"
              className="block mb-1 font-medium text-black"
            >
              Number of Passengers
            </label>
            <select
              id="passengers"
              onChange={(e) => setPassengers(e.target.value)}
              required
              className="p-2  text-black bg-white  w-[450px] pl-[20px] rounded-[15px] outline-none"
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5+ Passengers</option>
            </select>
          </div>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-1 ml-[40%] rounded-[8px] cursor-pointer flex gap-[10px] items-center mt-[10px]">
        <CiSearch className="font-bold h-[31px]" />
        Search Flights
      </button>
    </form>
  );
}

export default FlightForm;