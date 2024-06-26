import { Outlet, useParams, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FetchDetailsMovies } from "../../components/api/apiDetailsMovies.js";
import css from "./movieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const result = await FetchDetailsMovies(movieId);
      setMovieDetails(result);
    };
    loadDetails();
  }, [movieId]);

  const location = useLocation();
  const backLink = location.state ?? "/";
  const inputRef = useRef(location.state);

  const handleClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  const activeLink = ({ isActive }) => {
    return isActive ? css.active : css.notActive;
  };

  return (
    <div className="conteiner-movie-details">
      <button onClick={handleClick} type="button" className="back-btn">
        <NavLink to={backLink} className="back-btn-nav">
          Turn to home
        </NavLink>
      </button>

      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
        alt={`${movieDetails?.title}`}
        className="movie-deteils-img"
      />
      <h3>{movieDetails?.title}</h3>
      <p>Release date: {movieDetails?.release_date}</p>
      <h4>Overview</h4>
      <p>{movieDetails?.overview}</p>
      <h4>Geners</h4>
      {movieDetails?.genres.map((genre) => genre.name).join(", ")}

      <h4>Additional information:</h4>
      <NavLink to={`cast`} className={activeLink}>
        Cast
      </NavLink>
      <NavLink to={`reviews`} className={activeLink}>
        Reviews
      </NavLink>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
