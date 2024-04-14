import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Moviecard from "../../Components/Moviecard";
import { useEffect, useState } from "react";
import { Loader } from "../../Components/Loader";
import useNotification from "../../Hooks/useNotification";
import useApi from "../../Hooks/useApi";
import { env } from "../../utils/env";

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [apiFn] = useApi();
  const { showMessage } = useNotification();

  const fetchMovies = async () => {
    const { response, error } = await apiFn({
      url: `?s=${searchInput ? searchInput : "don"}&apiKey=${env?.apikey}`,
    });
    if (error) {
      showMessage({
        type: "error",
        value: error,
      });
      return;
    }
    setMoviesList(response?.Search);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSubmit = () => {
    fetchMovies();
  };
  return (
    <div className="flex flex-col gap-8 py-4 sm:px-6">
      <div className="p-4 w-full flex flex-col border-2 items-center sm:items-start border-red-600 rounded-md">
        <p className="text-3xl text-center sm:text-left font-semibold">
          Welcome to <span className="text-red-600">Watchlists</span>
        </p>
        <p className="mt-5 text-center sm:text-left">
          Browse Movies, add them to wishlists and share them with friends.
        </p>
        <div className="text-[16px] flex flex-col sm:flex-row items-center text-center sm:text-left">
          <div className="flex">
            <p className="font-medium">just click the,</p>
            <span className="align-middle">
              <BsBookmarkPlusFill color="#475467" />
            </span>
          </div>
          <p>
            to add a movie to the watchlist,to see more details click on the
            Movie poster.
          </p>
          {/* <button className="text-[16px]">
            <BsBookmarkPlusFill color="#475467" />
          </button> */}
          {/* <p className="font-medium">
            to add a movie to the watchlist,to see more details click on the
            Movie poster.
          </p> */}
        </div>
      </div>
      <div className="border-2 border-[#EAECF0]  items-center gap-1 rounded-md flex w-full">
        <div className="w-full flex p-2 items-center">
          <FaSearch color="#475467" size={18} />
          <input
            type="text"
            placeholder="Search Movies here..."
            className="outline-none pl-2 text-[#475467] w-full"
            onChange={handleChange}
            value={searchInput}
          />
        </div>
        <button
          onClick={onSubmit}
          className="ml-auto h-full w-[120px] rounded-md cursor-pointer py-2 px-2 bg-red-500 text-white text-[18px] font-medium"
        >
          Search
        </button>
      </div>
      {moviesList && moviesList?.length ? (
        <Moviecard moviesList={moviesList} />
      ) : (
        <div className="h-[40vh] w-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
