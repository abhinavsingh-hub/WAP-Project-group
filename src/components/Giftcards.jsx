import { useState } from "react";
import Navbar from "./Navbar";
import Options from "./Options";
import Footer from "./Footer";

export default function Giftcards() {
    const [activeTab, setActiveTab] = useState('egift');

    const eGiftThemes = [
        { alt: "Best Partner", src: "https://in.bmscdn.com/gv/gift_my_show_09272025102721_480x295.jpg" },
        { alt: "Best Bestie", src: "https://in.bmscdn.com/gv/gift_my_show_09302025103016_480x295.jpg" },
        { alt: "My Support System", src: "https://in.bmscdn.com/gv/gift_my_show_09312025103139_480x295.jpg" },
        { alt: "Besties Forever", src: "https://in.bmscdn.com/gv/gift_my_show_09322025103221_480x295.jpg" },
        { alt: "I Love You", src: "https://in.bmscdn.com/gv/gift_my_show_09332025103325_480x295.jpg" },
        { alt: "Forever My Fun", src: "https://in.bmscdn.com/gv/gift_my_show_09342025103420_480x295.jpg" },
        { alt: "My Happy Place", src: "https://in.bmscdn.com/gv/gift_my_show_09352025103525_480x295.jpg" },
        { alt: "Older But Not Wiser", src: "https://in.bmscdn.com/gv/gift_my_show_09362025103645_480x295.jpg" }
    ];

    return (
        <div className="bg-[#f2f2f2] min-h-screen">
            <Navbar />
            <Options />

            <div className="max-w-7xl mx-auto py-10 px-4">
                <div className="bg-white rounded-sm shadow-sm overflow-hidden min-h-[600px]">
                    
                    <div className="flex border-b border-gray-200">
                        <div
                            onClick={() => setActiveTab('egift')}
                            className={`flex-1 py-4 text-center font-medium cursor-pointer transition-all ${activeTab === 'egift' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            E-Gift Cards
                        </div>
                        <div
                            onClick={() => setActiveTab('physical')}
                            className={`flex-1 py-4 text-center font-medium cursor-pointer transition-all ${activeTab === 'physical' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Physical Gift Cards
                        </div>
                    </div>

                    <div className="p-8">
                        {activeTab === 'egift' ? (
                            <div className="space-y-10">
                                <div className="text-center space-y-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Pick a card from one of our themes</h3>
                                    <ul className="flex justify-center flex-wrap gap-4 pt-2">
                                        <li className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium cursor-pointer">All</li>
                                        <li className="px-6 py-2 border border-gray-200 text-gray-600 rounded-full text-sm font-medium hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">Entertaining Gifts</li>
                                        <li className="px-6 py-2 border border-gray-200 text-gray-600 rounded-full text-sm font-medium hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">Bestie Gifts</li>
                                        <li className="px-6 py-2 border border-gray-200 text-gray-600 rounded-full text-sm font-medium hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">Made with Love</li>
                                    </ul>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                                    {eGiftThemes.map((theme, idx) => (
                                        <div key={idx} className="group cursor-pointer">
                                            <div className="rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all border border-transparent group-hover:border-red-500">
                                                <img
                                                    alt={theme.alt}
                                                    className="w-full h-auto object-contain bg-gray-50 bg-opacity-50"
                                                    src={theme.src}
                                                />
                                            </div>
                                            <p className="mt-3 text-sm font-medium text-gray-700 text-center">{theme.alt}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 p-6 flex justify-center gap-8 border-t border-gray-100 mt-12">
                                    <div className="text-xs font-semibold text-gray-400 hover:text-red-500 cursor-pointer uppercase transition-all">Terms & Conditions</div>
                                    <div className="text-xs font-semibold text-gray-400 hover:text-red-500 cursor-pointer uppercase transition-all">Need Help?</div>
                                    <div className="text-xs font-semibold text-gray-400 hover:text-red-500 cursor-pointer uppercase transition-all">Check Gift Card Balance</div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="flex-1 space-y-6">
                                    <h5 className="text-sm font-bold tracking-wider text-gray-400 uppercase">INTRODUCING PHYSICAL GIFT CARDS</h5>
                                    <div className="text-gray-600 text-lg leading-relaxed">
                                        Gift your loved ones a range of experiences from movies to events, plays, concerts and sports with a BookMyShow gift card. Now pick one up at a store near you!!
                                        <br /><br />
                                        BookMyShow Gift Cards are now available at thousands of stores at all major towns across India.
                                    </div>

                                    <div className="space-y-6 pt-6">
                                        <h6 className="text-sm font-semibold text-gray-800">Available at stores near you</h6>
                                        <ul className="flex flex-wrap gap-4">
                                            {[1, 2, 'my_jio_store_logo_unit', 5, 6].map((img, i) => (
                                                <li key={i} className="border border-gray-100 p-2 rounded">
                                                    <img
                                                        alt="availabe-in-store"
                                                        width="120"
                                                        height="56"
                                                        src={`https://assets-in.bmscdn.com/webin/giftcards/available/row1/${img}${typeof img === 'number' ? '.png' : '.jpg'}`}
                                                    />
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="text-sm font-semibold text-gray-800">Or order online from</h6>
                                        <ul className="flex flex-wrap gap-4">
                                            {[1, 2].map((img, i) => (
                                                <li key={i} className="border border-gray-100 p-2 rounded">
                                                    <img
                                                        alt="available-online"
                                                        width="120"
                                                        height="56"
                                                        src={`https://assets-in.bmscdn.com/webin/giftcards/available/row2/${img}.png`}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col items-center gap-8">
                                    <img
                                        alt="giftcard-icon"
                                        className="w-full max-w-md shadow-lg rounded-lg"
                                        src="https://assets-in.bmscdn.com/webin/giftcards/giftcard.png"
                                    />
                                    <ul className="space-y-6 w-full max-w-sm">
                                        <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                            <div className="p-2 bg-red-50 rounded-full shrink-0">
                                                <svg width="24" height="24" className="text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm text-black">As easy as paying cash</span>
                                        </li>
                                        <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                            <div className="p-2 bg-red-50 rounded-full shrink-0">
                                                <svg width="24" height="24" className="text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm text-black">Use it anytime, anywhere through the BookMyShow mobile app or website.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
