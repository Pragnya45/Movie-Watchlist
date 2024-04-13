import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "./Pages/Signin";
import Layout from "./Components/Layout";
import MoviesPage from "./Pages/Dashboard";
import MovieDetailsPage from "./Pages/MovieDetails";
import { profileState } from "./Redux/profileSlice";
import { useSelector } from "react-redux";
import WatchlistPage from "./Pages/Watchlist";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute children={<MoviesPage />} />} />
        <Route
          path="/movies/:title/:id"
          element={<PrivateRoute children={<MovieDetailsPage />} />}
        />
        <Route
          path="/watchlist"
          element={<PrivateRoute children={<WatchlistPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(profileState)?.isLoggedIn;
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/signin" />;
}
