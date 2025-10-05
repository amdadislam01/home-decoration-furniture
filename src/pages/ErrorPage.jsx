import React from 'react'
import { Link } from 'react-router'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12 text-center">
            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
                Page Not Found
            </h2>

            {/* Divider */}
            <div className="h-px w-64 bg-gradient-to-r from-gray-500/40 via-gray-400/80 to-gray-500/40 my-8"></div>

            {/* Description */}
            <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
                Oops! The page you are looking for doesn’t exist or has been moved.
                Please check the URL or go back to the homepage.
            </p>

            {/* Button */}
            <Link
                to={'/'}
                className="group flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white px-8 py-3 rounded-full mt-10 font-medium text-lg shadow-lg active:scale-95 transition-all duration-300"
            >
                Back to Home
                <svg
                    className="group-hover:translate-x-1 transition-transform"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        </div>
  )
}

export default ErrorPage
