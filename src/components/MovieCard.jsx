function MovieCard({ movie }) {
  return (
    <div className="h-full min-w-[140px] sm:min-w-[180px] md:min-w-[220px] relative flex flex-col gap-2 group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-white text-xs sm:text-sm flex items-center gap-1">
          ⭐️ {movie.popularity}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-sm sm:text-base md:text-lg line-clamp-1">{movie.title}</h3>
        <p className="text-zinc-500 text-xs sm:text-sm line-clamp-1">{movie.genres.join(" / ")}</p>
      </div>
    </div>
  );
}

export default MovieCard;
