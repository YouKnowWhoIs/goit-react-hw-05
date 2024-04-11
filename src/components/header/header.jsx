import { NavLink } from "react-router-dom";
import css from "./header.module.css";

const activePage = ({ isActive }) => {
  return isActive ? css.active : css.notActive;
};

export const Header = () => {
  return (
    <div className="header-conteiners">
      <nav className="header-nav">
        <NavLink to="/" className={activePage}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activePage}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
