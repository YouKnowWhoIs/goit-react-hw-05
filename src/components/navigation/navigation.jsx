import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

export const Navigation = () => {
  const activePage = ({ isActive }) => {
    return isActive ? css.active : css.notActive;
  };

  return (
    <>
      <NavLink to="/" className={activePage}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activePage}>
        Movies
      </NavLink>
    </>
  );
};
