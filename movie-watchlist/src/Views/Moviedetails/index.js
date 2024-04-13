import { useEffect, useState } from "react";
import { Loader } from "../../Components/Loader";
import useNotification from "../../Hooks/useNotification";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { env } from "../../utils/env";
import placeholderImg from "../../assets/images/placeholder.webp";
import { MdDone } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { profileState } from "../../Redux/profileSlice";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [apiFn] = useApi();
  const { showMessage } = useNotification();
  const navigate = useNavigate();
  const { email } = useSelector(profileState);
  const fetchMovies = async () => {
    const { response, error } = await apiFn({
      url: `?i=${id}&apiKey=${env?.apikey}`,
    });
    if (error) {
      showMessage({
        type: "error",
        value: error,
      });
      return;
    }
    console.log(response);
    setMovieDetails(response);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
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
    navigate("/watchlist");
  };
  return (
    <>
      {movieDetails ? (
        <div className="flex flex-col  gap-8 py-4  items-start sm:px-6">
          <p className="text-3xl font-semibold text-left drop-shadow-lg text-red-600">
            {movieDetails?.Title}
          </p>
          <div className="flex flex-col w-full sm:flex-row gap-6">
            <img
              src={
                movieDetails?.Poster !== "N/A"
                  ? movieDetails?.Poster
                  : placeholderImg
              }
              alt="Poster"
              className="w-[14rem] shadow-lg shadow-blue-500/60  object-cover"
            />

            <div className="flex flex-col gap-1">
              <p className="text-black font-semibold text-[18px]">
                Director- {""}
                {movieDetails?.Director}
                {"("}
                {movieDetails?.Year}
                {")"}
              </p>
              <p className="text-[#475467] font-semibold mt-2 text-[14px]">
                {movieDetails?.Genre}
              </p>
              <p className="text-[#475467] font-semibold text-[14px]">
                {movieDetails?.Country} | {movieDetails?.Language} |{" "}
                {movieDetails?.Runtime}
              </p>
              <div className="flex mt-3 gap-4">
                <button className="flex p-1 rounded-md drop-shadow-lg bg-red-600 gap-2 px-3 items-center text-white font-extrabold text-[14px] fill-white">
                  <MdDone className="fill-inherit" size={15} />#
                  {movieDetails?.Metascore}
                </button>
                <button className="flex p-1 rounded-md drop-shadow-lg bg-red-600 gap-2 px-3 items-center text-white font-extrabold text-[14px] fill-white">
                  <span>&#9733;</span>
                  {movieDetails?.Rated.substring(3)}
                </button>
                <button className="flex p-1 rounded-md drop-shadow-lg bg-yellow-500  gap-2 px-3 items-center text-black font-extrabold text-[14px] fill-white">
                  <span className="font-extrabold">IMDB</span>
                  {movieDetails?.imdbRating}
                </button>
              </div>
              <p className="text-[#475467] font-semibold  mt-2 text-[14px]">
                Relased - {movieDetails?.Released}
              </p>
              <Tooltip title="Watchlist">
                <button
                  onClick={() => addToWatchlist(movieDetails)}
                  className="flex py-2 mt-5 w-fit rounded-md drop-shadow-lg bg-red-600 gap-2 px-5 items-center  text-white font-extrabold text-[14px] fill-white"
                >
                  <GrAdd size={23} />
                  Add to Watchlist
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EAECF0]"></div>
          <p className="text-3xl font-semibold text-left drop-shadow-lg text-red-600">
            Plot
          </p>
          <p className="text-[#475467] font-semibold text-center sm:text-left text-[14px]">
            {movieDetails?.Plot}
          </p>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
}
