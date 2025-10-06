const LOCATIONS = ["Show All", "📍 Helsinki, Finland", "📍 Turku, Finland", "📍 Oulu, Finland", "📍 Vaasa, Finland"];

export default function LocationPanel({ value, onSelect }) {
  return (
    <ul className="space-y-3">
      {LOCATIONS.map((loc) => (
        <li
          key={loc}
          onClick={() => onSelect(loc)}
          className={`
            cursor-pointer
            block
            px-4 py-2
            rounded-lg
            transition-all duration-200
            transform
            dark:text-white
            ${value === loc ? "font-bold bg-gray-200 dark:bg-slate-900" : "bg-transparent"}
            hover:bg-gray-100 dark:hover:bg-slate-900
            hover:scale-105
            active:bg-gray-300 dark:active:bg-slate-800
          `}
        >
          {loc}
        </li>
      ))}
    </ul>
  );
}
