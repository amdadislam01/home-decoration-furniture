import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const links = (
        <>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
                        : "text-gray-700 font-work hover:text-cyan-600 hover:bg-cyan-50 px-4 py-2 rounded-md transition"
                }
            >
                Home
            </NavLink>

            <NavLink
                to={"/product"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
                        : "text-gray-700 font-work hover:text-cyan-600 hover:bg-cyan-50 px-4 py-2 rounded-md transition"
                }
            >
                Furniture
            </NavLink>

            <NavLink
                to={"/whislist"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
                        : "text-gray-700 font-work hover:text-cyan-600 hover:bg-cyan-50 px-4 py-2 rounded-md transition"
                }
            >
                Wishlist
            </NavLink>
        </>
    );
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-10 navbar">
                {/* Left */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                            {/* Mobile Buttons */}
                            <div className="mt-3 flex flex-col gap-2">
                                <a className=" font-work px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white text-center cursor-pointer">
                                    Login
                                </a>
                            </div>
                        </ul>
                    </div>

                    {/* Brand */}
                    <a className=" font-work text-2xl font-bold text-cyan-700 mr-3">
                        Home<span className="text-gray-900 font-work ">Decor</span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* Right (Desktop Buttons) */}
                <div className="navbar-end gap-4 hidden sm:flex">
                    <Link
                        to="/cart"
                        className="relative font-semibold text-gray-700 hover:text-cyan-600 transition px-4 py-2 rounded-md flex items-center gap-2 bg-gray-100 hover:bg-cyan-50"
                    >
                        🛒 Cart
                        <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            3
                        </span>
                    </Link>
                    <a className=" font-work px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white cursor-pointer">
                        Login
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
