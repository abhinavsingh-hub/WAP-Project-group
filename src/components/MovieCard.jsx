import { movie } from "../data/movie";
function MovieCard({movie}){
    return (
        <div>
            <img src= {movie.image} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <p>Rating⭐️:{movie.rating}</p>
        </div>
    )

}
export default MovieCard;