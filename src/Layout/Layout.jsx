import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { CartProvider } from "../Context/CartContext";

const Layout = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
