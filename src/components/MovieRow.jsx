import { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieRow({ title, movie }) {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-6 relative overflow-x-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div 
        className="flex overflow-x-auto gap-4 pb-4 no-scrollbar" 
        ref={scrollRef}
      >
        {movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-all z-10"
      >
        ‹
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-all z-10"
      >
        ›
      </button>
    </div>
  );
}

export default MovieRow;
