import React from "react";

export default function Header({ onOpenSearch, darkMode, setDarkMode }) {
  return (
    <header>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-8 text-sm">
        <img
          className="w-24"
          src="./src/images/icons/logo-f7862584.svg"
          alt="logo-icon"
        />
        <div
          onClick={onOpenSearch}
          className="flex items-center w-[300px] rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.15)] cursor-pointer mx-auto sm:mx-0 dark:bg-gray-600"
        >
          <div className="flex-1 text-center py-3 border-r border-gray-200">
            <span className="text-gray-400 dark:text-white">Add location</span>
          </div>
          <div className="flex-1 text-center py-3 border-r border-gray-200">
            <span className="text-gray-400 dark:text-white">Add guests</span>
          </div>
          <div className="flex items-center justify-center w-12">
            <img
              className="w-5"
              src="https://windbnb-dev-challenges.vercel.app/assets/search_icon.326a574d.svg"
              alt="search icon"
            />
          </div>
        </div>
      </div>
      <label id="ui-switch" className="flex items-center justify-end mr-8 mb-4">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </header>
  );
}
