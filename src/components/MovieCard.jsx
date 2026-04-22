import { useEffect, useState } from "react";
import { getNowPlayingMovies,getUpcomingMovies } from "../data/movie";

function MovieCard({ movie }) {
  return (
    <div className="h-full min-w-62.5 relative">
      <img src={movie.poster} width="100%" className="rounded-2xl"/>
      <h3 className="font-bold text-xl">{movie.title}</h3>

      <p className="absolute z-3 top-0 text-white text-xl font-bold">⭐️ {movie.popularity}</p>
      <p>{movie.genres.join(" / ")}</p>
    </div>
  );
}

export default MovieCard;
