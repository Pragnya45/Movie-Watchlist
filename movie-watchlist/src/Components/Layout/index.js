import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function Layout() {
  return (
    <div className="w-full flex flex-col h-screen overflow-y-hidden">
      <Header />
      <div className="flex h-full grow">
        <Sidebar />
        <div className="min-h-screen overflow-y-auto w-full p-6 pb-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
