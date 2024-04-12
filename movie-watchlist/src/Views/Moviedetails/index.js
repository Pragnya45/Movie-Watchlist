import { useEffect, useState } from "react";
import { Loader } from "../../Components/Loader";
import useNotification from "../../Components/useNotification";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { env } from "../../utils/env";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [apiFn] = useApi();
  const { showMessage } = useNotification();

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
  return (
    <>
      {movieDetails && movieDetails.length ? (
        <div className="flex flex-col h-24 gap-8 py-4 px-6">
          <p className="text-3xl font-semibold text-black">
            {movieDetails?.Title}
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
