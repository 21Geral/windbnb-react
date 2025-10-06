import { useState } from "react";

export default function GuestsPanel({ adultsChildren = 0, onChange }) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  function update(a, c) {
    setAdults(a);
    setChildren(c);
    onChange(a + c);
  }

  return (
    <div className="space-y-4">
      {/* Adults */}
      <div>
        <p className="font-semibold dark:text-white">Adults</p>
        <p className="text-sm text-gray-400">Ages 13 or above</p>
        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => update(Math.max(adults - 1, 0), children)}>-</button>
          <span className="dark:text-white">{adults}</span>
          <button onClick={() => update(Math.min(adults + 1, 10), children)}>+</button>
        </div>
      </div>

      {/* Children */}
      <div>
        <p className="font-semibold dark:text-white">Children</p>
        <p className="text-sm text-gray-400">Ages 2–12</p>
        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => update(adults, Math.max(children - 1, 0))}>-</button>
          <span className="dark:text-white">{children}</span>
          <button onClick={() => update(adults, Math.min(children + 1, 12))}>+</button>
        </div>
      </div>
    </div>
  );
}
