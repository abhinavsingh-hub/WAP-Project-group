import MovieCard from "./MovieCard";

function MovieRow({ title, movie }) {
  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;