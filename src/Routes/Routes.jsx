import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        hydrateFallbackElement: <h1>Loading...</h1>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:"/apps",
                Component: Apps,
            }
        ]
    }



])

export default router