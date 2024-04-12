import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
export default function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="w-full flex flex-col h-screen overflow-y-hidden">
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="flex h-full grow">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className="min-h-screen overflow-y-auto w-full p-6 pb-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
