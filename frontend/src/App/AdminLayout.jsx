import React from "react";
import { Outlet,} from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import StudentSidebar from "../admin/components/Menubar";
import MobileMenuBar from "../admin/components/PAMenu";
import MobileHeader from "../admin/components/Back";

const AppLayout = () => {


  return (
    <div className="flex min-h-screen w-full bg-white text-gray-900">
      {/* SIDEBAR DESKTOP */}

      <div className="hidden md:flex fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-40">
        <StudentSidebar />
      </div>

      {/* MAIN CONTENT */}

      <div className="flex-1 md:ml-72 flex flex-col min-h-screen">
        {/* MOBILE HEADER */}

        {/* PAGE CONTENT */}

        <main className="flex-1  pb-20 mb:px-0 md:pb-6 bg-white">
          <Outlet />
        </main>

        {/* MOBILE MENU */}

        <div className="md:hidden">
          <MobileMenuBar />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
