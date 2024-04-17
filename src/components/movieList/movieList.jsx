import { NavLink, useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id} className="movies-list">
              <NavLink
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { from: location.pathname },
                }}
                className="nav-link-movies"
              >
                {movie.original_title}
              </NavLink>
            </li>
          ))
        ) : (
          <p>bbb</p>
        )}
      </ul>
    </div>
  );
};
