import Logo from "../../assets/images/Movie watchlist.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState, useRef } from "react";
import { ThemeSwitch } from "../ThemeSwitch";
import { useTheme } from "../ThemeProvider";
export default function Header({ openSidebar, setOpenSidebar }) {
  const menuRef = useRef(null);
  const { theme } = useTheme();

  const handlePopup = (e) => {
    e.stopPropagation();
    if (menuRef.current && showMenu && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  if (typeof window !== "undefined") {
    window && window.addEventListener("mousedown", handlePopup);
  }
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className={`min-h-[5rem] h-[5rem] w-full z-10 shadow-lg bg-color-sidebar-${theme}`}
    >
      <div className="h-full w-full  max-w-screen-2xl  flex items-center mx-auto px-4 justify-between">
        <div className="flex gap-4">
          <button
            className="sm:hidden z-10 cursor-pointer"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <IoMenu
              className={`${
                theme === "dark" ? "text-[#E1E1E1]" : "text-black"
              }`}
              size={30}
            />
          </button>
          <Link to={"/"} className="flex h-full items-center sm:pl-4 gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-sm"
            />
            <h1 className="mx-auto my-1 text-xl sm:text-3xl font-semibold text-red-600">
              Watchlist
            </h1>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
