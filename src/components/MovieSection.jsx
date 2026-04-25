import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Options from "./Options";
import Heroarea from "./Heroarea";
import MovieCard from "./MovieCard";
import { getNowPlayingMovies } from "../data/movie";

export default function MovieSection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const nowPlaying = await getNowPlayingMovies();
            setMovies(nowPlaying);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <Options />
            <div className="p-8 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-black">Movie Preferences</h1>
                <p className="text-gray-600 mb-8">
                    Welcome to the movies section! You can display your movie preferences here.
                </p>
                <Heroarea/>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
                
            </div>
        </div>
    );
}
