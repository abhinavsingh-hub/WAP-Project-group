function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 h-15">
            <div className="flex items-center gap-8 mx-30">
                <a href="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc24uoiO9o95saxJEfckq-SH37rPT5VvbPsw&s"
                        alt="Logo"
                        className="h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer"
                    />
                </a >
                <div className="relative group flex items-center">
                    <span className="absolute left-3 text-zinc-400 group-hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        className="bg-white text-zinc-300 pl-10 pr-4 py-2 w-[500px] rounded-md border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all placeholder:text-zinc-500"
                    />
                </div>
            </div>
            <div className="flex items-center gap-6">
                <button className="text-zinc-500 hover:text-white text-sm font-medium transition-colors">Pune</button>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-1.5 rounded text-sm font-semibold transition-all active:scale-95">
                    Sign in
                </button>
                <button className="text-zinc-400 hover:text-white transition-colors mr-30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;