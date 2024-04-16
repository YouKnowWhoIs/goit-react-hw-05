import { NavLink } from "react-router-dom";

export const MovieList = ({ movies }) => {
  console.log("work: ", movies);
  return (
    <div>
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movie/${movie.id}`}>
                {movie.original_title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
