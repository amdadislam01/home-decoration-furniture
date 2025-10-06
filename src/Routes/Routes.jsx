import React from "react";
import { createBrowserRouter } from "react-router"; // ✅ react-router-dom

import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import Whislist from "../pages/Whislist";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import OrderSuccess from "../pages/OrderSuccess";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/whislist", element: <Whislist /> },

      // Cart accessible without login
      { path: "/cart", element: <Cart /> },

      // Payment, OrderSuccess, Orders - Clerk will handle login redirect
      { path: "/payment", element: <Payment /> },
      { path: "/order-success", element: <OrderSuccess /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

export default router;
