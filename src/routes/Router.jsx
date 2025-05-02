import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews />,
                    loader: () => fetch('/news.json'),
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "/auth/login",
                    element: <Login />,
                },
                {
                    path: "/auth/register",
                    element: <SignUp />,
                }
            ]
        },
        {
            path: "/news/:id",
            element: <PrivateRoute>
                    <NewsDetails />
                </PrivateRoute>,
            loader: () => fetch('/news.json'),
        },
        {
            path: "/*",
            element: <h1>Error404</h1>,
        },
    ]
)

export default router;