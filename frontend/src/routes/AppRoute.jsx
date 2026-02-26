import { createBrowserRouter } from "react-router-dom";
import Publiclayout from '../App/PublicLayout'
import PublicRoute from '../routes/PublicRoute'
import Login from '../pages/auth/Login'
import AppLayout from "../App/AppLayout";
import Register from "../pages/auth/Register";


export const router = createBrowserRouter([
    {
        element: <Publiclayout />,
        children: [
            {
                path: "/register",
                element: (
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                )
            },
            {
                path: "/login",
                element: (
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                )
            }
        ]
    },
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: (
                    <div className="h-screen w-screen bg-black text-white">This is a home page</div>
                )
            }
        ]
    }
])