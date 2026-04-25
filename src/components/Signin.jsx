import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-800">Get Started</h2>
                    <p className="text-gray-500 text-sm mt-2">Sign in to unlock more features</p>
                </div>

                {/* Social Buttons */}
                <div className="px-8 py-4 space-y-4">
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700">
                        <svg className="w-5 h-5" viewBox="0 0 384 512">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.8-38.3 0-82.6 25 -104.9 66.8-44.1 82.5-11.3 194.2 30.6 254.4 20.5 29.5 45.1 58.7 76.2 57.7 30.3-1.1 41.6-19.1 77.8-19.1 36.2 0 46.7 19.1 78.4 18.5 32.2-.6 53.4-26.3 73.9-56 24-34.9 33.9-68.7 34.2-70.4-1.2-.6-66.2-25.5-66.2-101.4z" />
                            <path d="M218.6 72c15.1-18.3 25.1-43.9 22.3-69.4-22.5 1.1-49.8 15.2-66 34.1-14.6 17-27.4 43.1-23.7 67.8 25 1.1 49.8-14.2 67.4-32.5z" />
                        </svg>
                        Continue with Apple
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Continue with Email
                    </button>
                </div>

                {/* Footer */}
                <div className="p-8 text-center">
                    <p className="text-gray-400 text-xs leading-relaxed">
                        I agree to the <span className="underline cursor-pointer">Terms & Conditions</span> & <span className="underline cursor-pointer">Privacy Policy</span>
                    </p>
                    <div className="mt-6">
                        <Link to="/" className="text-red-500 text-sm font-semibold hover:text-red-600 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}