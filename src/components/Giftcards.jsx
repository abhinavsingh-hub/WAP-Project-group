import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Options from "./Options";

export default function Giftcards() {
    return (
        <div>
            <Navbar />
            <Options />
            <div className="grid grid-cols-2 mt-5 border border-black items-center justify-center px-1/2 py-1/2 bg-white-400 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 h-10 mx-120">
                <div className="text-black bg-gray-200 h-full w-full border border-red-500 text-center hover:text-red-500 text-sm transition-colors"><h4>E-Gift Cards</h4></div>
                <div className="text-black bg-white-200 h-full w-full border border-red-500 text-center hover:text-red-500 text-sm transition-colors"><h4>Physical Gift Cards</h4></div>
            </div>
        </div>
    );
}
