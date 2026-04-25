import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import MovieRow from "../components/MovieRow";
import { getNowPlayingMovies, getUpcomingMovies } from "../data/movie";
import Navbar from "../components/Navbar";
import Heroarea from "../components/Heroarea";
import Options from "../components/Options";
import RecommendedSuffix from "../components/RecommendedSuffix";




export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const nowPlaying = await getNowPlayingMovies();
      const upcoming = await getUpcomingMovies();
      setMovies(nowPlaying);
      setUpcomingMovies(upcoming);
    }
    fetchData();
  }, []);

  const handleFilterClick = (filter) => {
    console.log("Filter clicked:", filter);
  };

  return(
    <div id="gamesgrid" className=" flex mx-30 my-10">
        <div id="filter" className=" w-70">
            <h2 className="font-bold text-2xl mb-4 ">Filters</h2>
            <div id="languages" className="bg-orange-50 p-4" >
                <h3 className="font-semibold mb-2">Languages</h3>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">English</button>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Hindi</button>
            </div>
            <br />
            <div id="languages" className="bg-orange-50 p-4" >
                <h3 className="font-semibold mb-2">Genres</h3>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Drama</button>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Comdedy</button>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Thriller</button>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Action</button>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Adventure</button>
                <button className="rounded m-1 p-2 border border-gray-300 hover:bg-gray-200 cursor-pointer transition-colors">Horror</button>

            </div>
            

        </div>
        <div id="grid">

        </div>
    </div>
  )
}
