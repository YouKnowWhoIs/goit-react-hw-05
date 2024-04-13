import { NavLink } from "react-router-dom";

export const HomePage = ({ MoviesList }) => {
  // console.log(MoviesList);
  return (
    <ul className="home-conteiner">
      <h1>Trending today</h1>
      {MoviesList.map((MovieList) => (
        <li key={MovieList.id}>
          <NavLink to={`/movie/${MovieList.id}`}>
            {MovieList.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
