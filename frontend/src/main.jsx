import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoute";
import ToastProvider from "./context/ToastContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ToastProvider>
  </StrictMode>,
);
