import { useSearchParams, useNavigate } from "react-router-dom";
import { SearchMovies } from "../../components/api/apiSearchMovies.js";
import { useEffect, useState } from "react";
import { MovieList } from "../../components/movieList/movieList.jsx";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const searchValue = searchParams.get("query");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        if (searchValue) {
          const resData = await SearchMovies(searchValue);
          setMovies(resData);
          console.log(resData);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadMovies();
  }, [searchValue]);

  const handleSearch = () => {
    setSearchParams({ query: searchInput });
    navigate(`/movies?query=${encodeURIComponent(searchInput)}`);
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
    const form = event.currentTarget;
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="conteiner-movies-page">
        <input
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search..."
          className="moveie-search-input"
        />
        <button type="submit" className="movie-search-btn">
          Search
        </button>
      </form>

      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <>not faund any movies</>
      )}
    </>
  );
};
