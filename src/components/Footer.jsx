import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-700 font-work">
            Home<span className="text-gray-900">Decor</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Beautiful and modern home decoration products to make your space
            stylish & comfortable.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-cyan-600 transition">Home</a>
            </li>
            <li>
              <a href="/product" className="hover:text-cyan-600 transition">Products</a>
            </li>
            <li>
              <a href="/whislist" className="hover:text-cyan-600 transition">Whislist</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm">Email: support@homedecor.com</p>
          <p className="text-sm">Phone: +880 1234 567 890</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="hover:text-cyan-600">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-cyan-600">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-cyan-600">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} HomeDecor. All rights reserved.
        <p>Developed By Amdad Islam</p>
      </div>
    </footer>
  );
};

export default Footer;
