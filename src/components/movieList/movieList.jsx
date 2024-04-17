import { NavLink } from "react-router-dom";

export const MovieList = ({ movies }) => {
  const movieResults = movies.results;

  return (
    <div>
      <ul>
        {movieResults.length > 0 &&
          movieResults.map((movie) => (
            <li key={movie.id} className="movies-list">
              <NavLink to={`/movie/${movie.id}`} className="nav-link-movies">
                {movie.original_title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
