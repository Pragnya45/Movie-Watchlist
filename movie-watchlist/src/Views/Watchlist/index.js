import Moviecard from "../../Components/Moviecard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { profileState } from "../../Redux/profileSlice";

export default function Watchlist() {
  const { email } = useSelector(profileState);
  const [watchlistMovies, setWatchlistMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist"))?.[email] || [];
  });
  const removeFromWatchlist = (movieId) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || {};

    const updatedWatchlist = (watchlist[email] || []).filter(
      (movie) => movie.imdbID !== movieId
    );

    watchlist[email] = updatedWatchlist;

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setWatchlistMovies(updatedWatchlist);
  };
  return (
    <div className="flex flex-col  gap-8 py-4  items-center sm:items-start sm:px-6">
      <p className="text-3xl font-semibold text-center sm:text-left drop-shadow-lg text-red-600">
        Your Watchlist
      </p>
      <Moviecard
        watchlist="true"
        moviesList={watchlistMovies}
        removeFromWatchlist={removeFromWatchlist}
      />
    </div>
  );
}
