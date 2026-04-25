import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-[#333333] text-[#abaeb3] pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">BookMyShow</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Our Offerings</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="hover:text-white transition-colors">Movies</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Plays</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Sports</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">For Partners</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="hover:text-white transition-colors">Advertise</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">List Your Event</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Partnerships</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Social</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="hover:text-white transition-colors">Facebook</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Twitter</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Instagram</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-center my-10 relative">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <div className="px-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc24uoiO9o95saxJEfckq-SH37rPT5VvbPsw&s"
                            alt="BookMyShow"
                            className="h-8"
                        />
                    </div>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>

                <div className="flex justify-center gap-4 mb-10">
                    {[
                        { icon: "f", path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" },
                        { icon: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                        { icon: "I", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.612 6.76 6.977 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                        { icon: "Y", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                        { icon: "P", path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.965 7.397 6.93 0 4.135-2.607 7.462-6.225 7.462-1.215 0-2.358-.631-2.75-1.378l-.749 2.848c-.27 1.029-1.002 2.319-1.493 3.116 1.13.348 2.325.536 3.562.536 6.621 0 11.987-5.365 11.987-11.987C24.004 5.367 18.638 0 12.017 0z" },
                        { icon: "L", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0z" }
                    ].map((item, idx) => (
                        <Link key={idx} to="#" className="w-10 h-10 bg-[#4e505a] rounded-full flex items-center justify-center hover:bg-white hover:text-[#31333e] transition-all group">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d={item.path} />
                            </svg>
                        </Link>
                    ))}
                </div>

                <div className="text-center text-[10px] space-y-4 max-w-5xl mx-auto opacity-60">
                    <p>Copyright 2026 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
                    <p className="leading-relaxed">
                        The content and images used on this site are copyright protected and copyrights vests with the respective owners.
                        The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
                        Unauthorized use is prohibited and punishable by law.
                    </p>
                </div>
            </div>
        </div>
    );
}