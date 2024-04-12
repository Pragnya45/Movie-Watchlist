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
export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      className={`h-full ${
        openSidebar ? "w-64" : "w-0 sm:w-64"
      } border-r-2 px-6 border-[#EAECF0] absolute ${
        openSidebar ? "left-[0px]" : "left-[-500px] sm:left-[0px]"
      }  sm:relative flex bg-white  items-center flex-col gap-2 z-10`}
    >
      <h1 className="mx-auto my-1 text-3xl font-semibold text-red-600">
        Watchlist
      </h1>
      <div className="border-2 flex rounded-md  p-1 items-center border-[#EAECF0]">
        <FaSearch color="#475467" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none pl-2 w-full"
        />
      </div>

      <div className="flex flex-col justify-between h-[70%] items-start w-full gap-3 pt-4">
        {sidebarLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`w-full rounded-md active:bg-red-600 ${
              location.pathname === link.path
                ? "bg-red-600 font-bold"
                : "bg-tranparent"
            }
             
            
            `}
          >
            <button
              className={`flex gap-2 w-full items-center  text-[1.05rem] text-black p-3  hover:text-white hover:bg-red-600 ${
                location.pathname === link.path
                  ? "font-medium text-white"
                  : "font-normal"
              }`}
            >
              <MdOutlineHome
                color={location.pathname === link.path ? "#fff" : "#000"}
                size={25}
              />
              {link.label}
            </button>
          </NavLink>
        ))}
        <div className="w-full h-[2px] bg-[#EAECF0]"></div>
        <button className="my-1 text-xl cursor-pointer font-semibold text-black">
          My lists
        </button>
        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className="flex relative cursor-pointer gap-2 border-2 rounded-md border-[#EAECF0] w-full mt-auto items-center fill-black text-[1.05rem] text-black p-1 pl-2  font-normal"
        >
          <RiAccountCircleLine className="fill-inherit" size={30} />
          Account
          <button className="ml-auto cursor-pointer">
            <IoEllipsisVerticalSharp className=" rotate-90" />
          </button>
          {showMenu && (
            <div className="absolute flex flex-col items-start p-4 gap-3 shadow-lg rounded-md bg-white -top-[3.4rem] -right-[13.5rem]">
              <p className="text-black">{email}</p>
              <button
                className="flex gap-2 w-full mt-auto items-center  text-[1.05rem] text-black font-normal"
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
        </div>
      </div>
    </aside>
  );
}
