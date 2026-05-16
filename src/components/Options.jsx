import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className="bg-white border-b border-zinc-200 sticky top-16 z-40 h-10 flex items-center w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <Link to="/movies">
            <button className="text-zinc-700 hover:text-red-500 text-xs md:text-sm transition-colors whitespace-nowrap">
              Movies
            </button>
          </Link>
          {["Events", "Plays", "Sports", "Activities", "More"].map((item) => (
            <a href="/" key={item}>
              <button className="text-zinc-700 hover:text-red-500 text-xs md:text-sm transition-colors whitespace-nowrap">
                {item}
              </button>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          {["List your show", "Corporates", "Offers"].map((item) => (
            <button key={item} className="text-zinc-700 hover:text-red-500 text-xs md:text-sm transition-colors whitespace-nowrap">
              {item}
            </button>
          ))}
          <Link to="/giftcards">
            <button className="text-zinc-700 hover:text-red-500 text-xs md:text-sm transition-colors whitespace-nowrap">
              Gift Cards
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
