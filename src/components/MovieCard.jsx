import { movie } from "../data/movie";
export default function MovieCard({movie}){
    return (
        <div>
            <img src= {movie.image} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <p>Rating⭐️:{movie.rating}</p>
        </div>
    )

}
