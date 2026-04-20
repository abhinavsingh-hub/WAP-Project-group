import MovieRow from "../components/MovieRow";
import { movie } from "../data/movie";
import Navbar from "../components/Navbar";
import Heroarea from "../components/Heroarea";

function Home() {
  return (
    <div>
      <Navbar />
      <Heroarea />
      <MovieRow title="Recommended movie" movie={movie} />
      <MovieRow title="Trending Now" movie={movie} />
    </div>
  );
}

export default Home;