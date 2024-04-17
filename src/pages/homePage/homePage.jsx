// import { lazy, Suspense } from "react";

import { useEffect, useState } from "react";
import { fetchTreandMovies } from "../../components/api/apiTrendMovies";
import { MovieList } from "../../components/movieList/movieList.jsx";

// const MovieList = lazy(() =>
//   import("../../components/movieList/movieList.jsx")
// );

export const HomePage = () => {
  const [treandMovies, setTreandMovies] = useState([]);

  const MoviesList = treandMovies;

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

  return (
    <ul className="home-conteiner">
      <h1>Trending today</h1>
      {MoviesList.length > 0 ? (
        // <Suspense fallback={<div>Loading movies list...</div>}>
        <MovieList movies={MoviesList} />
      ) : (
        // </Suspense>
        <p className="home-page-loading">Loading...</p>
      )}
    </ul>
  );
};
