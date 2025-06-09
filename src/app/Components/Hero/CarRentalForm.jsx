import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";



function CarRentalForm() {
  return (
    <form>
      <h2 className="text-2xl font-semibold pl-[50%] hover:underline">
        Car Rental
      </h2>
      <div className="grid grid-cols-3 pl-[25px] gap-[20px] ">
        <div>
          <label htmlFor="myInput">Pick-Up location</label>
          <div className="flex items-center gap-[20px] bg-white rounded-[8px] border-[1px]-solid border-grey h-[35px] pl-[15px]">
            <FaLocationDot />
            <input
              className="outline-none w-[70%]"
              id="myInput"
              type="text"
              placeholder="City, Airport, Address, or Hotel"
            />
          </div>
        </div>
        <div>
          <label htmlFor="myInput">Pick-Up Date</label>
          <div className="flex items-center gap-[10px] bg-white rounded-[8px] border-[1px]-solid border-grey h-[35px] pl-[20px]">
            <CiCalendarDate />
            <input
              id="myInput"
              className="outline-none"
              type="text"
              placeholder="Input Date"
            />
          </div>
        </div>
        <div>
          <label htmlFor="myInput">Drop-Off Date</label>
          <div className="flex items-center gap-[10px] bg-white rounded-[8px] border-[1px]-solid border-grey h-[35px] pl-[20px]">
            <CiCalendarDate />
            <input
              className="outline-none"
              id="myInput"
              type="text"
              placeholder="Input Date"
            />
          </div>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-1 ml-[47%] rounded-[10px] flex gap-[10px] items-center mt-[10px] cursor-pointer">
        <IoCarSportOutline className="font-bold h-[31px]" />
        Search Cars
      </button>
    </form>
  );
}

export default CarRentalForm;
