import React from "react";
import { createBrowserRouter } from "react-router";

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
      { path: "/cart", element: <Cart /> },
      { path: "/payment", element: <Payment /> },
      { path: "/order-success", element: <OrderSuccess /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

export default router;
