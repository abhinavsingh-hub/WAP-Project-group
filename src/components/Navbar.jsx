import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { name: "Movies", path: "/movies" },
        { name: "Events", path: "/" },
        { name: "Plays", path: "/" },
        { name: "Sports", path: "/" },
        { name: "Activities", path: "/" },
        { name: "Gift Cards", path: "/giftcards" },
    ];

    return (
        <nav className="bg-white text-zinc-900 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 h-16 flex items-center w-full overflow-x-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-8 flex-1">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc24uoiO9o95saxJEfckq-SH37rPT5VvbPsw&s"
                            alt="Logo"
                            className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer shrink-0"
                        />
                    </Link >
                    <div className="relative group hidden sm:flex items-center flex-1 max-w-[600px]">
                        <span className="absolute left-3 text-zinc-400 group-hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            placeholder="Search for Movies, Events, Plays, Sports..."
                            className="bg-white text-zinc-800 pl-10 pr-4 py-2 w-full rounded-md border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all placeholder:text-zinc-500 text-sm"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6 shrink-0">
                    <button className="text-zinc-600 hover:text-red-500 text-sm font-medium transition-colors hidden sm:block">Pune</button>
                    <Link to="/signin">
                        <button className="bg-red-500 hover:bg-red-600 px-4 md:px-5 py-1.5 rounded text-xs md:text-sm font-semibold transition-all active:scale-95 text-white">
                            Sign in
                        </button>
                    </Link>
                    <button 
                        onClick={toggleMenu}
                        className="text-zinc-500 hover:text-red-500 transition-all active:scale-90"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 top-16 bg-black/60 z-[90] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            />
            
            <div className={`fixed top-16 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[100] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col gap-6 overflow-y-auto h-full">
                    {/* Search inside menu for mobile */}
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-zinc-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            placeholder="Search Movies, Events..."
                            className="bg-zinc-100 text-zinc-800 pl-10 pr-4 py-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-base"
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider px-2">Navigation</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.name} 
                                    to={item.path} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-3 rounded-lg text-zinc-800 font-medium hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-between group"
                                >
                                    {item.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-300 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pb-6 flex flex-col gap-4 border-t border-zinc-100 pt-6">
                        <button className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] text-zinc-400 uppercase font-bold">Your Location</span>
                                <span className="text-zinc-800 font-bold">Pune</span>
                            </div>
                            <span className="text-red-500 text-xs font-bold">Change</span>
                        </button>
                        <p className="text-center text-[10px] text-zinc-400">Copyright 2026 © Bigtree Entertainment</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;