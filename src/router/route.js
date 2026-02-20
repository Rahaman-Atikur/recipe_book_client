import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Addrecipe from "../pages/Addrecipe";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,

    },
    {
        path: "addrecipe",
        Component: Addrecipe
    },
]);