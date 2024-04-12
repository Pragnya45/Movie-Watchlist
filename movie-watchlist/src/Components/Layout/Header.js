import Logo from "../../assets/images/Movies watchlist.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
export default function Header({ openSidebar, setOpenSidebar }) {
  return (
    <header className="h-20 shadow-md">
      <div className="container h-full w-full max-w-screen-2xl flex items-center mx-auto px-4 justify-between">
        <div className="flex gap-4">
          <button
            className="sm:hidden cursor-pointer"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <FiMenu color="#000" size={30} />
          </button>
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Logo"
              className="sm:w-[6rem] sm:h-[5rem] w-[3rem] h-[3rem] object-contain"
            />
          </Link>
        </div>
        {/* <div className="lg:flex hidden items-center border rounded-full pl-2 w-full justify-between max-w-sm focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search Products here..."
            className="outline-none  w-full"
          />
          <div className="text-lg min-w-[50px] h-8 cursor-pointer bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <FaSearch />
          </div>
        </div> */}
      </div>
    </header>
  );
}
