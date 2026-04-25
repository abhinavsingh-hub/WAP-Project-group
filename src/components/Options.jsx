import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className="flex items-center justify-between gap-8 px-6 py-4 bg-white-400 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 h-10">
      <div className="flex items-center gap-8 ml-30">

        <Link to="/movies">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            Movies
          </button>
        </Link>
        <a href="/">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            Events
          </button>
        </a>
        <a href="/">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            Plays
          </button>
        </a>
        <a href="/">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            Sports
          </button>
        </a>
        <a href="/">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            Activities
          </button>
        </a>
        <a href="/">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            More
          </button>
        </a>
      </div>
      <div className="flex items-center gap-8 mr-30">
        <button className="text-black hover:text-red-500 text-sm transition-colors">
          List your show
        </button>
        <button className="text-black hover:text-red-500 text-sm transition-colors">
          Corporates
        </button>
        <button className="text-black hover:text-red-500 text-sm transition-colors">
          Offers
        </button>
        <Link to="/giftcards">
          <button className="text-black hover:text-red-500 text-sm transition-colors">
            Gift Cards
          </button>
        </Link>
      </div>
    </div>
  );
}
