import React, { useState } from "react";

export default function SearchModal({ isOpen, onClose, onSearch }) {
  const [location, setLocation] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const totalGuests = adults + children;

  const handleSearch = () => {
    onSearch({ location, guests: totalGuests });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/50 dark:bg-black/60 z-40 flex justify-center items-start pt-10" onClick={onClose}>
      <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg w-full max-w-3xl mx-4 p-4 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between sm:hidden mb-4">
          <h2 className="text-sm text-gray-800 dark:text-gray-200">Edit your search</h2>
          <button onClick={onClose}>✖</button>
        </div>

        {/* Location selector */}
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Location</p>
          <ul className="space-y-2 mt-2">
            {["Show All", "📍 Helsinki, Finland", "📍 Turku, Finland", "📍 Oulu, Finland", "📍 Vaasa, Finland"].map((item) => (
              <li key={item} className="cursor-pointer dark:text-white" onClick={() => setLocation(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Guests */}
        <div className="mt-4">
          <p className="font-semibold text-gray-700 dark:text-white">Guests</p>
          <div className="flex items-center gap-4 mt-2">
            <div>
              <p>Adults</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setAdults((n) => Math.max(0, n - 1))}>-</button>
                <span>{adults}</span>
                <button onClick={() => setAdults((n) => Math.min(10, n + 1))}>+</button>
              </div>
            </div>
            <div>
              <p>Children</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setChildren((n) => Math.max(0, n - 1))}>-</button>
                <span>{children}</span>
                <button onClick={() => setChildren((n) => Math.min(12, n + 1))}>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={handleSearch} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl">
            🔍 Search
          </button>
        </div>
      </div>
    </div>
  );
}
