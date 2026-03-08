import React from "react";
import { Outlet } from "react-router-dom";

import StudentSidebar from "../components/Layout/MenuBar";
import Navabar from "../components/Layout/Navabar";
import MobileMenuBar from "../components/phone/PMenu";
import ScrollToTop from "../admin/components/ScrollTop";

import UseAuth from "../context/auth/UseAuth";

const AppLayout = () => {
  const { isAuthenticated } = UseAuth();

  return (
    <>
      <ScrollToTop />

      <div className="flex min-h-screen w-full bg-[#f8fafc] text-gray-900">
        {/* SIDEBAR (ONLY IF LOGGED IN) */}

        {isAuthenticated && (
          <div className="hidden md:flex fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-40">
            <StudentSidebar />
          </div>
        )}

        {/* MAIN AREA */}

        <div
          className={`flex-1 flex flex-col min-h-screen ${
            isAuthenticated ? "md:ml-72" : ""
          }`}
        >
          {/* NAVBAR */}

          <div className="sticky top-0 z-30 px-4 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <Navabar />
          </div>

          {/* PAGE CONTENT */}

          <main className="flex-1 md:p-6 py-4 px-1 pb-20 md:pb-6 bg-[#f8fafc]">
            <Outlet />
          </main>

          {/* MOBILE MENU (ONLY IF LOGGED IN) */}

          {isAuthenticated && (
            <div className="md:hidden">
              <MobileMenuBar />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
