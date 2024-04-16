import { Outlet, useParams, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchDetailsMovies } from "../../components/api/apiDetailsMovies.js";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const result = await FetchDetailsMovies(movieId);
      setMovieDetails(result);
      console.log(result);
    };
    loadDetails();
  }, [movieId]);

  // console.log(movieId);

  // const movieDetailsList = () => {
  //   const location = useLocation();
  //   const backLink = location.state ?? "/movie";

  //   return <NavLink to={backLink}>Turn back</NavLink>;
  // };

  return (
    <div>
      {/* {movieDetailsList()} */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
      />
      <h3>{movieDetails?.title}</h3>
      <p>Release date: {movieDetails?.release_date}</p>
      <h4>Overview</h4>
      <p>{movieDetails?.overview}</p>
      <h4>Geners</h4>
      {movieDetails?.genres.map((genre) => genre.name).join(", ")}

      <h4>Additional information:</h4>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>

      <Outlet />
    </div>
  );
};
