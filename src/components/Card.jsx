export default function Card({ photo, type, beds, rating, title, superHost }) {
  return (
    <div className="cursor-pointer">
      <div className="w-full aspect-[4/3]">
        <img className="rounded-3xl w-full h-full object-cover" src={photo} alt={title} />
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center pt-2 text-sm">
          {superHost && <span className="border rounded-xl px-4 py-1 mr-2 text-xs dark:text-white">SUPER HOST</span>}
          <h2 className="text-gray-500 dark:text-gray-200">
            {type}
            {beds !== null ? ` · ${beds} beds` : ""}
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-4" src="https://windbnb-dev-challenges.vercel.app/assets/star.55f860b4.svg" alt="star" />
          <span className="dark:text-white">{rating}</span>
        </div>
      </div>
      <h3 className="font-bold text-lg mt-2 dark:text-white">{title}</h3>
    </div>
  );
}
