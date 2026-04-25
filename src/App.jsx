import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieSection from "./components/MovieSection";
import Signin from "./components/signin";
import Giftcards from "./components/Giftcards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MovieSection />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/giftcards" element={<Giftcards />} />
    </Routes>
  );
}

export default App;
