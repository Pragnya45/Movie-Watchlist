import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "./Pages/Signin";
import Layout from "./Components/Layout";
import MoviesPage from "./Pages/Dashboard";
import MovieDetailsPage from "./Pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MoviesPage />} />
        <Route path="/Movies/:title/:id" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
