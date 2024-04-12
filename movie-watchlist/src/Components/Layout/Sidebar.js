import { MdOutlineHome } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebarLinks = [
    {
      path: "/",
      label: "Home",
      icon: <MdOutlineHome color="#000" size={25} />,
    },
  ];

  return (
    <aside
      className={`h-full border-r-2 px-6 border-[#EAECF0] w-0 sm:w-72 absolute left-[0px]
        sm:relative flex bg-white   items-center flex-col gap-2 z-10`}
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

      <div className="flex flex-col justify-between h-[74%] items-start w-full gap-3 pt-4">
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
        <h3 className="my-1 text-xl font-semibold text-black">My lists</h3>
        <div
          className="flex gap-2 border-2 rounded-md border-[#EAECF0] w-full mt-auto items-center fill-black text-[1.05rem] text-black p-1 pl-2 hover:bg-red-600 hover:text-white hover:fill-white font-normal"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <RiAccountCircleLine className="fill-inherit" size={30} />
          Account
          <button className="ml-auto cursor-pointer">
            <IoEllipsisVerticalSharp className=" rotate-90" />
          </button>
        </div>
      </div>
    </aside>
  );
}
