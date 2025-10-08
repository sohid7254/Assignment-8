import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppNotFound from "../Components/AppNotFound/AppNotFound";

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
            },
            {
                path:"/not-found",
                Component: AppNotFound,
            }
        ]
    }



])

export default router