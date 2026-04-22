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
    <div className="mx-20 my-2 relative">
      <h2 className=" text-2xl font-bold p-1">{title}</h2>
      <div className=" flex overflow-auto shrink-0 gap-3" ref={scrollRef}>
        {movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
      >
        ›
      </button>
    </div>
  );
}

export default MovieRow;
