import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchModal from "./components/SearchModal";
import CardList from "./components/CardList";

function App() {
  const [filters, setFilters] = useState({ location: null, guests: 0 });
  const [dark, setDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // <-- agregar estado modal

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header
        filters={filters}
        dark={dark}
        setDark={setDark}
        onOpenModal={() => setModalOpen(true)} // <-- pasar función al Header
      />
      <SearchModal
        filters={filters}
        setFilters={setFilters}
        open={modalOpen}
        setOpen={setModalOpen} // <-- pasar al modal
      />
      <CardList filters={filters} />
    </div>
  );
}

export default App;
