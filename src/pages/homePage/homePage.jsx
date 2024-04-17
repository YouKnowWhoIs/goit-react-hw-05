import { useEffect, useState } from "react";
import { fetchTreandMovies } from "../../components/api/apiTrendMovies";
import { MovieList } from "../../components/movieList/movieList.jsx";

const HomePage = () => {
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
        <MovieList movies={MoviesList} />
      ) : (
        <p className="home-page-loading">Loading...</p>
      )}
    </ul>
  );
};

export default HomePage;
