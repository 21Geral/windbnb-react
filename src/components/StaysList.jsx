import React, { useEffect, useState } from "react";
import staysData from "../data/stays.json";

export default function StaysList({ filters }) {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    let filtered = staysData;

    if (filters.location && filters.location !== "Show All") {
      filtered = filtered.filter(
        (stay) => `${stay.city}, ${stay.country}` === filters.location.replace("📍 ", "")
      );
    }

    if (filters.guests) {
      filtered = filtered.filter((stay) => stay.maxGuests >= filters.guests);
    }

    setStays(filtered);
  }, [filters]);

  return (
    <main>
      <div className="flex justify-between items-center px-8 lg:px-12 mb-6">
        <h1 className="text-xl font-bold dark:text-white">
          {filters.location && filters.location !== "Show All"
            ? `Stays in ${filters.location}`
            : "Stays in Finland"}
        </h1>
        <span className="text-gray-500 dark:text-gray-200">
          {stays.length} stay{stays.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="gap-8 p-8 lg:p-12 grid sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {stays.length === 0 && (
          <p className="text-gray-500 dark:text-white text-center col-span-full">
            No results found
          </p>
        )}
        {stays.map((stay, idx) => (
          <div key={idx} className="cursor-pointer w-full">
            <div className="w-full aspect-[4/3]">
              <img
                src={stay.photo}
                alt={stay.title}
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <div className="flex items-center pt-2">
                {stay.superHost && (
                  <span className="border rounded-xl px-4 py-1 mr-2 text-xs dark:text-white">
                    SUPER HOST
                  </span>
                )}
                <h2 className="text-gray-500 dark:text-gray-200">
                  {stay.type}
                  {stay.beds !== null ? ` · ${stay.beds} beds` : ""}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-5"
                  src="https://windbnb-dev-challenges.vercel.app/assets/star.55f860b4.svg"
                  alt="star"
                />
                <h4>{stay.rating}</h4>
              </div>
            </div>
            <h2 className="font-bold text-lg mt-2 dark:text-white">
              {stay.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
