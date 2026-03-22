import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Addrecipe from "./pages/Addrecipe";
import "./index.css";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "home",
        loader: async () => {

          const response = await fetch("https://recipe-book-server-pp1ex6eip-atikur-rahamans-projects-7616adbe.vercel.app/allRecipes");
          if (!response.ok) throw new Error("Failed to load data");
          return response.json();
        },
        element: <Home></Home>
      }
    ]
  },

  // {
  //   path: "home",
  //   element: <Home></Home>,
  // },
  {
    path: "addrecipe",
    element: <Addrecipe></Addrecipe>

  },
  {
    path: "register",
    element: <Register></Register>
  },
  {
    path: "login",
    element: <Login></Login>
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
