export default function Header({ filters, dark, setDark, onOpenModal }) {
  return (
    <header>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-8 text-sm">
        <img className="w-24" src="./images/icons/logo-f7862584.svg" alt="logo" />
        <div
          id="searchFilter"
          className="flex items-center w-[300px] rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.15)] cursor-pointer mx-auto sm:mx-0 dark:bg-gray-600"
          onClick={onOpenModal}
        >
          <div className="flex-1 text-center py-3 border-r border-gray-200">
            <span className="text-gray-400 dark:text-white">{filters.location ?? "Add location"}</span>
          </div>
          <div className="flex-1 text-center py-3 border-r border-gray-200">
            <span className="text-gray-400 dark:text-white">
              {filters.guests > 0 ? `${filters.guests} guest${filters.guests > 1 ? "s" : ""}` : "Add guests"}
            </span>
          </div>
          <div className="flex items-center justify-center w-12">
            <img className="w-5" src="https://windbnb-dev-challenges.vercel.app/assets/search_icon.326a574d.svg" alt="search icon" />
          </div>
        </div>
      </div>

      <label id="ui-switch" class="flex items-center justify-end mr-8 mb-4">
        <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </header>
  );
}
