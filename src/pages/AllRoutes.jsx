import { Routes, Route } from "react-router";
import Signin from "../components/signin";
import Home from "./Home";
import Giftcards from "../components/Giftcards";
import MovieSection from "../components/MovieSection";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/giftcards" element={<Giftcards />} />
            <Route path="/movies" element={<MovieSection />} />
        </Routes>
    );
}