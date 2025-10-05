import React from "react";
import { Link } from "react-router";


const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-4 md:mt-10 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Elevate Your Home with <span className="text-cyan-600">Premium Furniture</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover modern and timeless furniture pieces crafted from the best materials.  
            Style, comfort, and durability – all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={'/product'}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow-lg flex items-center gap-2 transition"
            >
              Shop Now 
            </Link>
            <a
              href="/about"
              className="px-6 py-3 border border-cyan-600 text-cyan-600 hover:bg-cyan-50 rounded-xl transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mr-0 md:mr-6">
          <img
            src="https://i.ibb.co.com/NgbhqnC6/Furniture-Collection.png"
            alt="Furniture"
            className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
          />
          {/* Decorative Shape */}
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-cyan-100 rounded-full -z-10"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-cyan-200 rounded-full -z-10"></div>
        </div>
      </div>
  );
};

export default Hero;
