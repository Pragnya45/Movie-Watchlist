import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../assets/images/placeholder.webp";
import { useState, useRef } from "react";
import useNotification from "./useNotification";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";

export default function Moviecard({ moviesList, watchlist }) {
  const navigate = useNavigate();
  const { showMessage } = useNotification();
  const menuRef = useRef(null);
  const [watchlistMovies, setWatchlistMovies] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const addToWatchlist = (movie) => {
    const isAlreadyAdded = watchlistMovies.some(
      (item) => item.imdbID === movie.imdbID
    );

    if (isAlreadyAdded) {
      showMessage({
        type: "error",
        value: "Movie is already in your watchlist",
      });
      return;
    }
    const updatedWatchlist = [...watchlistMovies, movie];
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchlistMovies(updatedWatchlist);
    showMessage({
      type: "success",
      value: "Movie added to your watchlist",
    });
  };
  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlistMovies.filter(
      (movie) => movie.imdbID !== movieId
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchlistMovies(updatedWatchlist);
  };
  const listToMap = watchlist ? watchlistMovies : moviesList;

  const MovieMenu = ({ movie }) => {
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
      <div className="relative" ref={menuRef}>
        <IoEllipsisVerticalSharp onClick={() => setShowMenu(!showMenu)} />
        {showMenu && (
          <div className="absolute z-10 flex flex-col items-start p-4 gap-3 shadow-lg rounded-md bg-white -top-[4rem] -right-[6rem]">
            <button
              className="flex gap-2 w-full mt-auto items-center text-[1.05rem] text-black font-normal"
              onClick={(e) => {
                e.stopPropagation();
                removeFromWatchlist(movie.imdbID);
              }}
            >
              <GoSignOut color="#000" size={20} />
              Remove
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex gap-10 w-full flex-wrap justify-center sm:justify-start">
      {listToMap && listToMap.length ? (
        listToMap?.map((movie, i) => (
          <div
            className="flex flex-col cursor-pointer relative w-48 h-[20rem] shadow-lg"
            key={i}
          >
            <div
              className="overflow-hidden"
              onClick={() => {
                navigate(`/Movies/${movie?.Title}/${movie?.imdbID}`);
              }}
            >
              <img
                src={movie?.Poster !== "N/A" ? movie?.Poster : placeholderImg}
                alt="Poster"
                className="w-full h-[14rem] transition ease-in-out delay-200 bg-white hover:scale-[1.2]"
              />
            </div>
            {!watchlist && (
              <button
                onClick={() => addToWatchlist(movie)}
                className="absolute bg-white rounded-full p-2 top-0 left-0"
              >
                <BsBookmarkPlusFill className="sm:text-[30px] text-[40px]" />
              </button>
            )}
            <div className="flex flex-col p-2">
              <p className="text-black ml-auto text-[12px] font-semibold">
                Imdb-<span className="text-red-600">{movie?.imdbID}</span>
              </p>
              <div className="flex items-center justify-between">
                <p className="mt-2 text-black text-[16px] line-clamp-2 font-semibold">
                  {movie?.Title}
                </p>

                {watchlist && <MovieMenu movie={movie} />}
              </div>
              <p className="text-[#475467] text-[12px] font-semibold">
                {"("}
                {movie?.Year}
                {")"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <p className="text-black text-center font-semibold text-2xl">
            {watchlist
              ? "Oops! It seems there are no items in your watchlist at the moment"
              : "No movies Found"}
          </p>
        </div>
      )}
    </div>
  );
}
