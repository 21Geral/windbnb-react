import React, { useState } from "react";
import Header from "./components/Header";
import SearchModal from "./components/SearchModal";
import StaysList from "./components/StaysList";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const [filters, setFilters] = useState({ location: null, guests: 0 });
  const [isModalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <Header onOpenSearch={() => setModalOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSearch={setFilters} />
      <StaysList filters={filters} />
      <footer className="flex items-center justify-center p-6">
        <a href="https://github.com/21Geral/windbnb" target="_blank" className="text-gray-400 dark:text-gray-200 text-sm">
          Created by <span className="cursor-pointer">21Geral</span> - devChallenges.io
        </a>
      </footer>
    </>
  );
}
