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
import AdminLayout from "../App/AdminLayout";
import AdminRoute from "./AdminRoute";
import HostelDetails from "../admin/pages/Dashboard";
import ASettings from "../admin/pages/settings/ASettings";
import HostelData from "../admin/pages/settings/HostelData";
import EditHostel from "../admin/pages/settings/EditHostel";
import QueriesPage from "../admin/pages/dashboard/Quaries";
import Users from "../admin/pages/dashboard/Users";
import RoomConfiguration from "../admin/pages/settings/RoomConfiguration";
import Tiffins from "../admin/pages/settings/Tiffins";
import TiffinEntries from "../admin/pages/settings/TiffinEntries";
import SecurityPageAdmin from "../admin/pages/settings/Sequrity";
import NotificationsSettings from "../admin/pages/settings/Notifications";
import Rooms from "../admin/pages/dashboard/Rooms";
import AdmissionQuery from "../pages/query/Query";
import RoomsPage from "../admin/pages/dashboard/CreateRoom";

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

  // admin routes here
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,

        element: (
          <AdminRoute>
            <HostelDetails />
          </AdminRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <AdminRoute>
            <ASettings />
          </AdminRoute>
        ),
      },
       {
        path: "settings/hostel-info",
        element: (
          <AdminRoute>
            <HostelData />
          </AdminRoute>
        ),
      },
       {
        path: "settings/edit-hostel",
        element: (
          <AdminRoute>
            <EditHostel />
          </AdminRoute>
        ),
      },
       {
        path: "queries",
        element: (
          <AdminRoute>
            <QueriesPage />
          </AdminRoute>
        ),
      },
       {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
       {
        path: "settings/rooms",
        element: (
          <AdminRoute>
            <RoomConfiguration />
          </AdminRoute>
        ),
      },
      {
        path: "settings/mess",
        element: (
          <AdminRoute>
            <Tiffins />
          </AdminRoute>
        ),
      },
       {
        path: "tiffin",
        element: (
          <AdminRoute>
            <TiffinEntries />
          </AdminRoute>
        ),
      },
      {
        path: "settings/security",
        element: (
          <AdminRoute>
            <SecurityPageAdmin />
          </AdminRoute>
        ),
      },
       {
        path: "settings/notifications",
        element: (
          <AdminRoute>
            <NotificationsSettings />
          </AdminRoute>
        ),
      },
      {
        path: "rooms",
        element: (
          <AdminRoute>
            <Rooms />
          </AdminRoute>
        ),
      },
       {
        path: "create/room",
        element: (
          <AdminRoute>
            <RoomsPage />
          </AdminRoute>
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
        index: true, // this replaces path: "/"
        element: <Home />,
      },
      {
        path: "mess-menu",
        element: <MessMenu />,
      },
       {
        path: "query",
        element: <AdmissionQuery />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <StudentProfile />
          </PrivateRoute>
        ),
      },
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
            <SettingsPage />
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
    ],
  },

  /* ---------------- 404 ---------------- */
  {
    path: "*",
    element: <NotFound />,
  },
]);
