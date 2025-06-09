"use client";
import styles from "./hero.module.css";
import React, { useState, useEffect } from "react";
import { PiAirplaneTilt } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiAirplaneLandingLight } from "react-icons/pi";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { getHotlDestination } from "../Utils/FetchData";
import HotelForm from "./HotelForm";
import FlightForm from "./FlightForm";
import CarRentalForm from "./CarRentalForm";


function BookingApp() {
  const [activeForm, setActiveForm] = useState("hotels");


  const renderForm = () => {
    switch (activeForm) {
      case "hotels":
        return <HotelForm />;
      case "cars":
        return <CarRentalForm />;
      case "flights":
        return <FlightForm />;
      default:  
        return null;
    }
  };

  return (
    <div className={`${styles.hero}`}>
    <div className="m-5">
        <div className="justify-center">
          <h1
            className= {`${styles.trip} text-white text-[45px] font-bold pl-[40%] pt-[100px]`}
          >
          Find Your Perfect Trip
        </h1>
        <p className={`${styles.trip} text-white text-[18px]  pl-[33%] `}>
          Search hotels, flights and car rentals across the world at the best
          prices
        </p>
      </div><div className="flex justify-between w-full bg-white cursor-pointer border-b border-[#f1f2f1]">
          <button
            onClick={() => setActiveForm("hotels")}
            className="text-black rounded flex justify-center items-center w-[33%] cursor-pointer gap-1 py-2  bg-white hover:bg-grey-500 hover:bg-[#f1f2f1]"
          >
            {" "}
            <LuHotel /> Book Hotels
          </button>
          <button
            onClick={() => setActiveForm("flights")}
            className="text-black rounded flex justify-center items-center cursor-pointer  w-[33%] gap-1 py-2 bg-white hover:bg-[#f1f2f1]"
          >
            {" "}
            <PiAirplaneTilt />
            Flights
          </button>
          <button
            onClick={() => setActiveForm("cars")}
            className="text-black rounded flex justify-center items-center cursor-pointer  w-[33%] gap-1 py-2 bg-white hover:bg-[#f1f2f1]"
          >
            {" "}
            <IoCarSportOutline />
            Car Rentals
          </button>
          </div>
        <div className="bg-gray-100 p-4 rounded shadow">{renderForm()}</div>
      </div>
    </div>
  );
}

// Individual Form Components


export default BookingApp;