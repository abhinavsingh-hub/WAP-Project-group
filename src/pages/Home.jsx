import { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow";
import { getNowPlayingMovies, getUpcomingMovies } from "../data/movie";
import Navbar from "../components/Navbar";
import Heroarea from "../components/Heroarea";
import Options from "../components/Options";
import RecommendedSuffix from "../components/RecommendedSuffix";
import HandleMovies from "../components/MovieSection";

function Home() {
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

  return (
    <div>
      <Navbar />
      <Options />
      <Heroarea />
      <MovieRow title="Recommended movies" movie={movies} />
      <MovieRow title="Upcoming Movies" movie={upcomingMovies} />
      <RecommendedSuffix />
    </div>
  );
}

export default Home;
