import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import MovieRow from "../components/MovieRow";
import { getNowPlayingMovies, getUpcomingMovies } from "../data/movie";
import Navbar from "../components/Navbar";
import Heroarea from "../components/Heroarea";
import Options from "../components/Options";
import RecommendedSuffix from "../components/RecommendedSuffix";
import MovieGrid from "./moviegrid";

function Home() {
  

  return (
    <div>
      <Navbar />
      <Options />
      <Heroarea />
      <MovieGrid />
      <RecommendedSuffix />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Home />);

export default Home;
