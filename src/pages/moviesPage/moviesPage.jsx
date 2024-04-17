import { useSearchParams } from "react-router-dom";
import { SearchMovies } from "../../components/api/apiSearchMovies.js";
import { useEffect, useState } from "react";
import { MovieList } from "../../components/movieList/movieList.jsx";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);

  const searchValue = searchParams.get("query") ?? "";

  useEffect(() => {
    const loadMovies = async () => {
      try {
        if (searchValue) {
          const resData = await SearchMovies(searchValue);
          setMovies(resData);
          setShowNoResults(resData.results.length === 0);
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadMovies();
  }, [searchValue]);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      setSearchParams({ query: searchInput });
    } else {
      alert("The search field is empty!");
    }
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
    setSearchInput("");
  };

  return (
    <div>
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

      {showNoResults && <p className="no-movies-found">No movies found.</p>}
      {movies && movies.results.length > 0 && (
        <MovieList movies={movies.results} />
      )}
    </div>
  );
};
