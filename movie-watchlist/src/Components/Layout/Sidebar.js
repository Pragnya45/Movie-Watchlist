import { MdOutlineHome } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

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
      className={`h-full w-0 sm:w-64 absolute left-[0px]
        sm:relative flex bg-white shadow-md  items-center flex-col gap-2 z-10`}
    >
      <h1 className="mx-auto my-1 text-3xl font-semibold text-red-600">
        Watchlist
      </h1>

      <div className="flex flex-col justify-between h-[77%] items-start w-full gap-3 pt-4">
        {sidebarLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`w-full active:bg-red-600 ${
              location.pathname === link.path
                ? "bg-red-600 font-bold"
                : "bg-tranparent"
            }
             
            
            `}
          >
            <button
              className={`flex gap-2 w-full items-center  text-[1.05rem] text-black p-3 pl-6 hover:text-white hover:bg-red-600 ${
                location.pathname === link.path ? "font-medium" : "font-normal"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          </NavLink>
        ))}
        <button
          className="flex gap-2 w-full mt-auto items-center  text-[1.05rem] text-black p-3 pl-6 hover:bg-red-600 hover:text-white font-normal"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <RiAccountCircleLine className="fill-inherit" size={22} />
          Account
        </button>
      </div>
    </aside>
  );
}
