import Logo from "../../assets/images/Movies watchlist.png";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <header className="h-20 shadow-md">
      <div className="container h-full w-full max-w-screen-2xl flex items-center mx-auto px-4 justify-between">
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-[6rem] h-[5rem] object-cover"
          />
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
