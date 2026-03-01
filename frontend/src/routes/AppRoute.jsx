import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../App/PublicLayout";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import AppLayout from "../App/AppLayout";
import NotFound from "../pages/notfound/PageNotFound";
import StudentProfile from "../pages/dashboard/Profile";
import EditProfile from "../pages/dashboard/EditProfile";
import SettingsPage from "../pages/settings/Settings";
import AccountInfo from "../pages/settings/AccountInfo";
import ChangePassword from "../pages/settings/ChangePassword";
import SecuritySetting from "../pages/settings/SecuritySetting";
import HelpSupport from "../pages/settings/HelpSupport";
import DeleteAccount from "../pages/settings/DeleteAccount";
import Home from "../pages/Home/Home";
import MessMenu from "../components/hostel/MessMenu";

export const router = createBrowserRouter([
  /* ---------------- AUTH ROUTES ---------------- */
  {
    path: "/auth",
    element: <PublicLayout />,
    children: [
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        ),
      },
    ],
  },


  // public home route


  /* ---------------- APP ROUTES ---------------- */
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,   // this replaces path: "/"
        element: (
         <Home/>
        ),
      },
      {
        path: "mess-menu",
        element:<MessMenu/>
      },
      {
        path: "profile",
        element:(
          <PrivateRoute>
            <StudentProfile/>
          </PrivateRoute>
        )
      }
    ],
  },


  // setting nested routes for dashboard
  {
    path: "/settings",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
         <PrivateRoute>
            <SettingsPage/>
          </PrivateRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "account-info",
        element: (
          <PrivateRoute>
            <AccountInfo />
          </PrivateRoute>
        ),
      },
      {
        path: "change-password",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
      {
        path: "security-setting",
        element: (
          <PrivateRoute>
            <SecuritySetting />
          </PrivateRoute>
        ),
      },
        {
        path: "help-support",
        element: (
          <PrivateRoute>
            <HelpSupport />
          </PrivateRoute>
        ),
      },
        {
        path: "delete-account",
        element: (
          <PrivateRoute>
            <DeleteAccount />
          </PrivateRoute>
        ),
      },
      
    ]
  },

  /* ---------------- 404 ---------------- */
  {
    path: "*",
    element: <NotFound />,
  },
]);