import { useState } from "react"
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { getHotlDestination } from "../Utils/FetchData";




function HotelForm() {
    const [ hotelDestination, setHotelDestination ] = useState([])

  useEffect(() => {
    const handleHotelDestination = async () => {
      const actualData = await getHotlDestination()
      setHotelDestination(actualData)
    }

    handleHotelDestination();
  }, [])

  console.log(hotelDestination)
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const destination = e.target.destination.value;
    const checkIn = e.target.checkIn.value;
    const checkOut = e.target.checkOut.value;
    const passengers = e.target.passengers.value;

    // Go to /hotels with query parameters
    router.push(
    
    );
  };

  return (
    <form className="rounded-none" onSubmit={handleSearch}>
      <h2 className="text-xl font-semibold pl-[40%] mb-2">Hotel Booking</h2>
      <div className="grid grid-cols-4 gap-[15px]">
        <div>
          <label htmlFor="good">Destination</label>
          <div className="flex items-center gap-4 bg-[#f9f9f9] p-2 rounded-[50px]">
            <FaLocationDot />
            <select>
            {
              hotelDestination?.data?.map((eachItem) => (
                  <option>{eachItem.region}</option>
                ))
            }
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="myInput">Check In</label>
          <div className="flex items-center gap-4 bg-[#f9f9f9] p-2 rounded-[50px]">
            <CiCalendarDate />
            <input
              name="checkIn"
              className="outline-none"
              type="date"
              placeholder="Check-in Date"
            />
          </div>
        </div>
        <div>
          <label htmlFor="myInput">Check Out</label>
          <div className="flex items-center gap-4 bg-[#f9f9f9] p-2 rounded-[50px]">
            <CiCalendarDate />
            <input
              name="checkOut"
              className="outline-none"
              type="date"
              placeholder="Check-Out Date"
            />
          </div>
        </div>
        <div>
          <label htmlFor="passengers">Guest</label>
          <div>
            <select
              id="Guest"
              className=" text-black bg-[#f9f9f9] p-2 rounded-[50px] w-[350px] outline-none"
              name="passengers"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-4 py-1 ml-[40%] rounded-[8px] cursor-pointer flex gap-[10px] items-center mt-[10px]">
          <CiSearch className="font-bold h-[31px]" />
          Search Hotels
        </button>
      </div>
    </form>
  );
}

export default HotelForm;