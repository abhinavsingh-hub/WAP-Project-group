import MovieRow from "../components/MovieRow";
import { movie } from "../data/movie";
import Navbar from "../components/Navbar";
import Heroarea from "../components/Heroarea";
import Options from "../components/Options";
import RecommendedSuffix from "../components/RecommendedSuffix";

function Home() {
  return (
    <div>
      <Navbar />
      <Options />
      <Heroarea />
      <MovieRow title="Recommended movie" movie={movie} />
      <MovieRow title="Trending Now" movie={movie} />
      <RecommendedSuffix />
    </div>
  );
}

export default Home;