import { MdOutlineHome } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { logoutFn } from "../../Redux/logoutSlice";
import { profileState } from "../../Redux/profileSlice";
import { useSelector } from "react-redux";
import { useTheme } from "../ThemeProvider";

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { email } = useSelector(profileState);
  const [showMenu, setShowMenu] = useState(false);
  const sidebarLinks = [
    {
      path: "/",
      label: "Home",
    },
  ];

  return (
    <aside
      className={`h-full shadow-lg  bg-color-sidebar-${theme} ${
        openSidebar ? "w-64" : "w-0 sm:w-72"
      } px-6 absolute ${
        openSidebar ? "left-[0px]" : "left-[-500px] sm:left-[0px]"
      }  sm:relative flex items-center flex-col gap-2 z-10`}
      onClick={() => setOpenSidebar(false)}
    >
      <div
        className={`border-2 mt-3 flex rounded-md border-color-input-${theme} text-color-${theme}  p-1 items-center border-[#EAECF0]`}
      >
        <FaSearch color="#475467" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent pl-2 w-full"
        />
      </div>

      <div className="flex flex-col justify-between h-[75%] items-start w-full gap-3 pt-4">
        {sidebarLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`w-full rounded-md active:bg-red-500 ${
              location.pathname === link.path
                ? `bg-red-500 font-bold`
                : "bg-tranparent"
            }
            `}
          >
            <button
              className={`flex gap-2 w-full items-center text-color-${theme} fill-black text-[1.05rem]  p-3  hover:fill-white hover:text-white hover:bg-red-500 hover:rounded-md ${
                location.pathname === link.path
                  ? `font-medium  text-color-${theme}`
                  : "font-normal"
              }`}
            >
              <MdOutlineHome
                className={`${
                  theme === "dark" ? "fill-[#E1E1E1]" : "fill-black"
                }`}
                size={25}
              />
              {link.label}
            </button>
          </NavLink>
        ))}
        <div
          className={`w-full h-[2px] bg-color-secondary-${theme} bg-[#EAECF0] `}
        ></div>
        <NavLink
          to="/watchlist"
          className={`my-1 text-xl w-full p-3 text-left rounded-md cursor-pointer hover:text-color-${theme} hover:bg-red-500 font-semibold text-color-${theme} ${
            location.pathname === "/watchlist"
              ? `text-color-${theme} bg-red-500`
              : ""
          }`}
        >
          My lists
        </NavLink>
        <div
          className={`mt-auto sm:hidden w-full flex flex-col items-start gap-1`}
        >
          <div
            className={`flex gap-2 w-full mt-auto border-2 p-2 rounded-md border-color-input-${theme}`}
          >
            <RiAccountCircleLine
              className={`${
                theme === "dark" ? "fill-[#E1E1E1]" : "fill-black"
              }`}
              size={30}
            />
            <p className={`text-color-${theme}`}>{email}</p>
          </div>

          <button
            className={`flex  gap-2 w-full p-2 mt-auto items-center   text-[1.05rem] text-color-${theme} font-normal`}
            onClick={() => {
              dispatch(logoutFn());
              navigate("/signin");
            }}
          >
            <GoSignOut
              className={`${
                theme === "dark" ? "fill-[#E1E1E1]" : "fill-black"
              }`}
              size={20}
            />
            Sign out
          </button>
        </div>
        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className={`sm:flex relative hidden cursor-pointer gap-2 border-2 rounded-md border-color-input-${theme} text-color-${theme} border-[#EAECF0] w-full mt-auto items-center fill-black text-[1.05rem] text-black p-1 pl-2  font-normal`}
        >
          <RiAccountCircleLine
            className={`${theme === "dark" ? "fill-[#E1E1E1]" : "fill-black"}`}
            size={30}
          />
          Account
          <button className="ml-auto cursor-pointer">
            <IoEllipsisVerticalSharp
              className={`${
                theme === "dark" ? "fill-[#E1E1E1]" : "fill-black"
              } rotate-90 `}
            />
          </button>
          {showMenu && (
            <div
              className={`absolute min-w-[12rem] w-fit flex flex-col items-start py-2  gap-2  shadow-lg rounded-md bg-color-sidebar-${theme}  -top-[3.4rem] -right-[11.5rem]`}
            >
              <p className={`text-color-${theme} px-4`}>{email}</p>
              <button
                className={`flex  gap-2 w-full p-2 mt-auto items-center   text-[1.05rem] text-color-${theme} font-normal`}
                onClick={() => {
                  dispatch(logoutFn());
                  navigate("/signin");
                }}
              >
                <GoSignOut
                  className={`${
                    theme === "dark" ? "fill-[#E1E1E1]" : "fill-black"
                  }`}
                  size={20}
                />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
