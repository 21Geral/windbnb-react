import { useEffect, useState } from "react";
import staysData from "../assets/stays.json";
import Card from "./Card.jsx";

export default function CardList({ filters }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let result = staysData;

    if (filters.location && filters.location !== "Show All") {
      const cleanLoc = filters.location.replace("📍 ", "");
      result = result.filter((stay) => `${stay.city}, ${stay.country}` === cleanLoc);
    }

    if (filters.guests) {
      result = result.filter((stay) => stay.maxGuests >= filters.guests);
    }

    setTimeout(() => {
      setData(result);
      setLoading(false);
    }, 1500);
  }, [filters]);

  return (
    <main>
      <div className="flex justify-between items-center px-8 lg:px-12 mb-6">
        <h1 className="text-xl font-bold dark:text-white">
          {filters.location && filters.location !== "Show All" ? `Stays in ${filters.location}` : "Stays in Finland"}
        </h1>
        <span className="text-gray-500 dark:text-gray-200">{data.length} stays</span>
      </div>

      <div className="gap-8 p-8 lg:p-12 grid sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-full animate-pulse">
                <div className="w-full aspect-[4/3] bg-gray-300 rounded-3xl dark:bg-gray-500"></div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-500 mt-3 w-2/3"></div>
              </div>
            ))
          : data.map((stay, i) => <Card key={i} {...stay} />)}
      </div>
    </main>
  );
}
