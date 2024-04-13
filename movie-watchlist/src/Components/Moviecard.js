import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../assets/images/placeholder.webp";
import { useState, useRef } from "react";
import useNotification from "../Hooks/useNotification";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { profileState } from "../Redux/profileSlice";

export default function Moviecard({
  moviesList,
  watchlist,
  removeFromWatchlist,
}) {
  const { email } = useSelector(profileState);

  const navigate = useNavigate();
  const { showMessage } = useNotification();

  const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || {};

    if (!watchlist[email]) {
      watchlist[email] = [];
    }

    const isAlreadyAdded = watchlist[email].some(
      (item) => item.imdbID === movie.imdbID
    );

    if (isAlreadyAdded) {
      showMessage({
        type: "error",
        value: "Movie is already in your watchlist",
      });
      return;
    }
    watchlist[email].push(movie);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    console.log(watchlist);
    showMessage({
      type: "success",
      value: "Movie added to your watchlist",
    });
  };

  const MovieMenu = ({ movie }) => {
    const menuRef = useRef(null);
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
        <Tooltip title="Remove from Watchlist" placement="bottom">
          <IoEllipsisVerticalSharp onClick={() => setShowMenu(!showMenu)} />
        </Tooltip>
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
      {moviesList && moviesList.length ? (
        moviesList?.map((movie, i) => (
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
              <Tooltip title="Add to Watchlist" placement="bottom">
                <button
                  onClick={() => addToWatchlist(movie)}
                  className="absolute bg-white rounded-full p-2 top-0 left-0"
                >
                  <BsBookmarkPlusFill className="sm:text-[30px] text-[40px]" />
                </button>
              </Tooltip>
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
