import { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";

import { fetchTreandMovies } from "../api/apiTrendMovies.js";
// import { FetchDetailsMovies } from "../api/apiDetailsMovies.js";
import { SearchMovies } from "../api/apiSearchMovies.js";
// import { fetchCreditsMovies } from "../api/apiCreditsMovies.js";
// import { fetchReviewsMovies } from "../api/apiReviewsMovies.js";

import { Header } from "../header/header.jsx";
import { HomePage } from "../../pages/homePage/homePage.jsx";
import { MoviesPage } from "../../pages/moviesPage/moviesPage.jsx";
import { MovieList } from "../movieCard/movieCard.jsx";
import { MovieDetailsPage } from "../../pages/movieDetailsPage/movieDetailsPage.jsx";
import { MovieCast } from "../../components/movieCast/movieCast.jsx";
import { MovieReviews } from "../../components/movieReviews/movieReviews.jsx";
import { NotFound } from "../../pages/notFound/notFound.jsx";

function App() {
  const [treandMovies, setTreandMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movies = SearchMovies(searchParams.get("name"));

  const MovieName = searchParams.get("name") ?? "";

  const visibleMovies = Array.isArray(movies)
    ? movies.filter((movie) =>
        movie.name.toLowerCase().includes(MovieName.toLocaleLowerCase())
      )
    : [];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resListMovies = await fetchTreandMovies();
        setTreandMovies(resListMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const handleString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleString(MovieName);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage MoviesList={treandMovies} />} />
        <Route
          path="/movies"
          element={
            <MoviesPage
              value={MovieName}
              onChange={handleString}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/movie/:movieName"
          element={<MovieList movies={visibleMovies} />}
        />
        <Route
          path="/movie/:movieId"
          element={
            <MovieDetailsPage
              movie={MovieName}
              setSearchParams={setSearchParams}
            />
          }
        >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
