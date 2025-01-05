import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../Pages/Home";
import AddEquipment from "../Pages/AddEquipment";
import AllEquipment from "../Pages/AllEquipment";
import MyEquipment from "../Pages/MyEquipment";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://sportify-hub-server-navy.vercel.app/all-products"),
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>,
        loader: () =>
          fetch("https://sportify-hub-server-navy.vercel.app/all-products"),
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://sportify-hub-server-navy.vercel.app/all-products"),
      },
      { path: "/log-in", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sportify-hub-server-navy.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sportify-hub-server-navy.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
