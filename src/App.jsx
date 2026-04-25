import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MovieSection />} />
    </Routes>
  );
}

export default App;
