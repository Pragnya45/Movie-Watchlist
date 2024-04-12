import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Moviecard({ moviesList }) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10 w-full flex-wrap items-center sm:items-start">
      {moviesList?.map((movie, i) => (
        <div
          className="flex flex-col cursor-pointer relative w-48 h-[20rem] shadow-lg"
          key={i}
          onClick={() => {
            navigate(`/Movies/${movie?.Title}/${movie?.imdbID}`);
          }}
        >
          <div className="overflow-hidden">
            <img
              src={movie?.Poster}
              alt="Poster"
              className="w-full h-[14rem] transition ease-in-out delay-200 bg-white hover:scale-[1.2]"
            />
          </div>
          <button className="absolute bg-white rounded-full p-2 top-0 left-0">
            <BsBookmarkPlusFill className="sm:text-[30px] text-[40px]" />
          </button>
          <div className="flex flex-col p-2">
            <p className="text-black ml-auto text-[12px] font-semibold">
              Imdb-<span className="text-red-600">{movie?.imdbID}</span>
            </p>
            <p className="mt-2 text-black text-[16px] line-clamp-2 font-semibold">
              {movie?.Title}
            </p>
            <p className="text-[#475467] text-[12px] font-semibold">
              {"("}
              {movie?.Year}
              {")"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
