import { Routes, Route } from "react-router";
import Signin from "../components/signin";
import Home from "./Home";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<Signin/>} />
        </Routes>
    );
}