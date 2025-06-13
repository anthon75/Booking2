"use client";

import React, { useEffect, useState } from "react";
import { getDestinationId, getSearchHotels } from "../Components/Utils/FetchData";
import { useSearchParams } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

const HotelsPage = () => {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const passengers = searchParams.get("passengers");

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [destSuggestions, setDestSuggestions] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      console.log("Search Params:", {
        destination,
        checkIn,
        checkOut,
        passengers,
      });

      if (!destination || !checkIn || !checkOut || !passengers) {
        console.error("Missing required search parameters");
        setLoading(false);
        return;
      }

      const destId = await getDestinationId(destination);
      console.log("Destination ID:", destId);

      if (!destId) {
        console.error("Invalid destination ID returned from API");
        await fetchSuggestions(destination); // fallback suggestions
        setLoading(false);
        return;
      }

      const hotelRes = await getSearchHotels(
        destId,
        checkIn,
        checkOut,
        passengers
      );
      const hotelsData = hotelRes?.data || [];

      if (hotelsData.length === 0) {
        await fetchSuggestions(destination); // fallback if no hotels
      }

      setHotels(hotelsData);
      setLoading(false);
    };

    const fetchSuggestions = async (destination) => {
      try {
        const res = await fetch(
          `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${encodeURIComponent(
            destination
          )}&countryCode=gb`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "2c0436d80amshd9027ce2b4260a1p12c3a7jsn4c6b749e5db1",
              "x-rapidapi-host": "booking-com15.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();

        const mapped =
          data?.data?.map((item) => ({
            id: item.dest_id,
            name: item.name,
            label: item.label,
            image: item.image_url || null,
          })) || [];

        setDestSuggestions(mapped);
      } catch (err) {
        console.error(
          "Error fetching fallback destination suggestions:",
          err.message
        );
      }
    };

    fetchHotels();
  }, [destination, checkIn, checkOut, passengers]);

  return (
    <div className="w-full min-h-screen p-6 bg-[#cadae2]">
      <h1 className="text-center text-2xl font-bold text-[#0095E6] mb-6">
        {`Hotels In ${destination}`}
      </h1>

      {loading ? (
        <p className="text-center text-xl text-[#0095E6]">Loading hotels...</p>
      ) : hotels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <div key={index} className="border rounded p-4 shadow bg-white">
              <img
                src={hotel.photo_main_url || "/placeholder.jpg"}
                alt={hotel.hotel_name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{hotel.hotel_name}</h2>
              <p className="text-sm text-gray-600">{hotel.city}</p>
              <p className="text-green-600 font-bold mt-1">
                ${hotel.min_total_price || "N/A"}
              </p>
              <p className="text-xs text-gray-500">
                {hotel.review_score
                  ? `Rating:${hotel.review_score}`
                  : "No rating"}
              </p>
            </div>
          ))}
        </div>
      ) : destSuggestions.length > 0 ? (
        <div>
          <h2 className="text-center text-lg font-medium text-gray-700 mb-4">
            No hotels found. Try one of these suggestions:
          </h2>
          {destSuggestions.map((dest) => (
            <div
              key={dest.id}
              className="h-[350px] w-full flex mt-[30px] bg-white"
            >
              <div className="w-[40%]">
                {dest.image && (
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-[100%] w-[100%] object-cover rounded"
                  />
                )}
              </div>
              <div className="w-[60%] gap-y-{30px}">
                <h2 className="pl-[40%] pt-[10px] text-3xl font-extrabold text-black ">
                  {dest.name}
                </h2>
                <p className="text-2xl flex items-center gap-[10px] text-gray-600 pl-[25%]">
                  {" "}
                  <IoLocationOutline /> {dest.label}
                </p>
                <div className="flex gap-[40px] pl-[10%] mt-[5%]">
                  <p className="px-4 py-1.5 justify-center bg-[#0095E6] text-white rounded-[15px] shadow cursor-pointer">
                    Free Wifi
                  </p>
                  <p className="px-4 py-1.5 justify-center bg-[#0095E6] text-white rounded-[15px] shadow cursor-pointer">
                    Spa
                  </p>
                  <p className="px-4 py-1.5 justify-center bg-[#0095E6] text-white rounded-[15px] shadow cursor-pointer">
                    Gym
                  </p>
                  <p className="px-4 py-1.5 justify-center bg-[#0095E6] text-white rounded-[15px] shadow cursor-pointer">
                    Breakfast
                  </p>
                  <p className="px-4 py-1.5 justify-center bg-[#0095E6] text-white rounded-[15px] shadow cursor-pointer">
                    {" "}
                    Room service
                  </p>
                  <p className="px-4 py-1.5 justify-center bg-[#0095E6] text-white rounded-[15px] shadow cursor-pointer">
                    {" "}
                    Pool
                  </p>
                </div>
                <div className="flex mt-[8%] pl-[10%]">
                  <div className="flex items-center gap-[10px]">
                    <p className="flex items-center text-lg text-black">
                      <LiaDollarSignSolid className="text-[#0095E6]" /> 199
                    </p>
                    <p>/</p>
                    <p>Night</p>
                  </div>
                  <div className="pl-[60%]">
                      <button className=" flex items-center px-4 py-2 justify-center bg-[#0095E6] text-white rounded-[10px] shadow hover:bg-blue-700 transition-colors cursor-pointer">
                        view details <MdKeyboardDoubleArrowRight />
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No hotels or suggestions found.
        </p>
      )}
    </div>
  );
};

export default HotelsPage; 