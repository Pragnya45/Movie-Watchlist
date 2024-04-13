import Moviecard from "../../Components/Moviecard";
import { useState, useRef } from "react";

export default function Watchlist() {
  const [watchlistMovies, setWatchlistMovies] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlistMovies.filter(
      (movie) => movie.imdbID !== movieId
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchlistMovies(updatedWatchlist);
  };
  return (
    <div className="flex flex-col  gap-8 py-4  items-start sm:px-6">
      <p className="text-3xl font-semibold text-left drop-shadow-lg text-red-600">
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
