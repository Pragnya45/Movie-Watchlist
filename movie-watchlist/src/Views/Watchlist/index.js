import Moviecard from "../../Components/Moviecard";

export default function Watchlist() {
  return (
    <div className="flex flex-col  gap-8 py-4  items-start sm:px-6">
      <p className="text-3xl font-semibold text-left drop-shadow-lg text-red-600">
        Your Watchlist
      </p>
      <Moviecard watchlist="true" />
    </div>
  );
}
