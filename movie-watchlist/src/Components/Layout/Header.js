import Logo from "../../assets/images/Movie watchlist.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { logoutFn } from "../../Redux/logoutSlice";
import { RiAccountCircleLine } from "react-icons/ri";
import { profileState } from "../../Redux/profileSlice";
import { useSelector, useDispatch } from "react-redux";
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
            <FiMenu fill={theme === "dark" ? "#E1E1E1" : "black"} size={30} />
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
        {/* <div
          onClick={() => setShowMenu(!showMenu)}
          ref={menuRef}
          className="flex relative sm:hidden ml-auto  cursor-pointer gap-2   items-center fill-black text-[1.05rem] text-black p-1 pl-2  font-normal"
        >
          <RiAccountCircleLine className="fill-inherit" size={30} />
          {showMenu && (
            <div className="absolute min-w-[8.5rem] z-10 w-fit flex flex-col items-start py-2  gap-2  shadow-lg rounded-md bg-white top-[2rem] -left-[6rem]">
              <p className="text-black px-4">{email}</p>
              <button
                className="flex hover:bg-red-100 gap-2 w-full p-2 mt-auto items-center   text-[1.05rem] text-black font-normal"
                onClick={() => {
                  dispatch(logoutFn());
                  navigate("/signin");
                }}
              >
                <GoSignOut color="#000" size={20} />
                Sign out
              </button>
            </div>
          )}
        </div> */}
      </div>
    </header>
  );
}
