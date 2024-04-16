import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTreandMovies } from "../../components/api/apiTrendMovies";

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
      {MoviesList.map((MovieList) => (
        <li key={MovieList.id} className="home-list">
          <Link to={`/movie/${MovieList.id}`} className="home-link">
            {MovieList.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
