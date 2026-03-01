import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/Layout/MenuBar";
import Navabar from "../components/Layout/Navabar";
import MobileMenuBar from "../components/phone/PMenu";
import TopNotification from "../components/Layout/Popup";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-[#f8fafc] text-gray-900">
      {/* <TopNotification message={"This is a message"} type="warning" /> */}
      {/* ✅ Sidebar - Desktop Only */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-40">
        <StudentSidebar />
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 md:ml-72 flex flex-col min-h-screen">

        {/* ✅ Navbar (No Menu Icon Now) */}
        <div className="sticky top-0 z-30 px-4 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <Navabar />
        </div>

        {/* ✅ Page Content */}
        <main className="flex-1 md:p-6 p-4 pb-20 md:pb-6  bg-[#f8fafc]">
          <Outlet />
        </main>

        {/* ✅ Mobile Bottom Menu (Mobile Only) */}
        <div className="md:hidden">
          <MobileMenuBar />
        </div>

      </div>
    </div>
  );
};

export default AppLayout;