import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { useCart } from "../Context/CartContext";
import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { cart } = useCart();
  const { user } = useUser();
  const [openProfile, setOpenProfile] = useState(false);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
            : "text-gray-700 font-work hover:text-cyan-600 hover:bg-cyan-50 px-4 py-2 rounded-md transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive
            ? "bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
            : "text-gray-700 font-work hover:text-cyan-600 hover:bg-cyan-50 px-4 py-2 rounded-md transition"
        }
      >
        Furniture
      </NavLink>
      <NavLink
        to="/whislist"
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
          <Link
            className="font-work text-2xl font-bold text-cyan-700 mr-3"
            to="/"
          >
            Home<span className="text-gray-900 font-work">Decor</span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-4">
          <Link to="/cart" className="relative cursor-pointer">
            <span className="text-2xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {user ? (
            <div className="relative">
              {/* Profile Image */}
              <img
                onClick={() => setOpenProfile(!openProfile)}
                src={
                  user.externalAccounts?.find(
                    (acc) => acc.provider === "google"
                  )?.publicMetadata?.picture ||
                  user.profileImageUrl ||
                  `https://ui-avatars.com/api/?name=${user.firstName}`
                }
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-cyan-600"
              />

              {/* Dropdown */}
              {openProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-700 hover:bg-cyan-50"
                  >
                    My Orders
                  </Link>
                  <SignOutButton>
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50">
                      Logout
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>
          ) : (
            <SignInButton>
              <button className="font-work px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white cursor-pointer">
                Login
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
