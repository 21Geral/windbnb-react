import { useState } from "react";
import LocationPanel from "./LocationPanel.jsx";
import GuestsPanel from "./GuestsPanel.jsx";

export default function SearchModal({ filters, setFilters, open, setOpen }) {
  const [tab, setTab] = useState("location");
  const [tempFilters, setTempFilters] = useState(filters);

  function applyFilters() {
    setFilters(tempFilters);
    setOpen(false);
  }
  if (!open) return null;
  return (
    <>
      <div id="overlay" className="fixed inset-0 bg-white/50 dark:bg-black/60 z-40 transition-opacity duration-300" onClick={() => setOpen(false)}>
        <div
          id="searchModal"
          className="fixed inset-x-0 top-0 w-full h-3/4 sm:left-1/2 sm:h-auto sm:w-full sm:-translate-x-1/2 bg-white dark:bg-gray-600 z-50 shadow-lg transform transition-all duration-300 opacity-100 translate-y-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tabs */}
          <div className="flex justify-between items-center p-4 sm:hidden">
            <h2 className="text-sm text-gray-800 dark:text-gray-200">Edit your search</h2>
            <button onClick={() => setOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              ✖
            </button>
          </div>

          <div className="rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col mx-6 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-gray-200 dark:sm:divide-gray-700 sm:mt-6">
            {/* Location */}
            <div
              className={`p-4 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer ${tab === "location" ? "bg-gray-100 dark:bg-slate-700" : ""}`}
              onClick={() => setTab("location")}
            >
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Location</p>
              <p className="text-gray-400 dark:text-gray-300 mt-2">{filters.location ?? "Find a location"}</p>
            </div>

            {/* Guests */}
            <div
              className={`p-4 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer border-t border-gray-200 dark:border-gray-700 sm:border-t-0 ${
                tab === "guests" ? "bg-gray-100 dark:bg-slate-700" : ""
              }`}
              onClick={() => setTab("guests")}
            >
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Guests</p>
              <p className="text-gray-400 dark:text-gray-300 mt-2">
                {filters.guests > 0 ? `${filters.guests} guest${filters.guests > 1 ? "s" : ""}` : "Add guests"}
              </p>
            </div>

            {/* Search button desktop */}
            <div className="hidden sm:flex items-center justify-center p-4">
              <button
                onClick={applyFilters}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl shadow cursor-pointer"
              >
                🔍 Search
              </button>
            </div>
          </div>

          {/* Panel content */}
          <div id="panelContent" className="mt-4 space-y-4 p-6">
            {tab === "location" && <LocationPanel value={filters.location} onSelect={(loc) => setTempFilters({ ...tempFilters, location: loc })} />}
            {tab === "guests" && <GuestsPanel adultsChildren={filters.guests} onChange={(guests) => setTempFilters({ ...tempFilters, guests })} />}
          </div>

          {/* Search button mobile */}
          <div className="sm:hidden flex items-center justify-center p-4 cursor-pointer">
            <button
              onClick={applyFilters}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-2xl"
            >
              🔍 Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
