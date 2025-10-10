import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppNotFound from "../Components/AppNotFound/AppNotFound";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";
import ErrorPage from "../Components/ErrorPage/ErrorPAge";
import loader from "../Hooks/loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        hydrateFallbackElement: <h1>Loading...</h1>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: loader,
                
            },
            {
                path:"/apps",
                element: <Apps/>,
                loader: loader,
            },
            {
                path:"/not-found",
                element: <AppNotFound/>,
            },
            {
                path:"/appDetails/:id",
                element: <AppDetails/>,
            },
            {
                path:"/installation",
                element:<Installation/>,
                loader: loader,

            },
            {
                path:"*",
                element: <ErrorPage/>,
            }
        ]
    }



])

export default router