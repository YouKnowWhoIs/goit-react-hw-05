import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Header } from "../header/header.jsx";
import { HomePage } from "../../pages/homePage/homePage.jsx";
import { MoviesPage } from "../../pages/moviesPage/moviesPage.jsx";
// import { MovieList } from "../movieList/movieList.jsx";
import { MovieDetailsPage } from "../../pages/movieDetailsPage/movieDetailsPage.jsx";
import { MovieCast } from "../../components/movieCast/movieCast.jsx";
import { MovieReviews } from "../../components/movieReviews/movieReviews.jsx";
import { NotFound } from "../../pages/notFound/notFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieName" element={<MovieList />} /> */}
        <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
