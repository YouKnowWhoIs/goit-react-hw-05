import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../header/header.jsx";
import { Home } from "../pages/home/home.jsx";
import { Movies } from "../pages/movies/movies.jsx";
import { MovieName } from "../pages/movieName/movieName.jsx";
import { NotFound } from "../notFound/notFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieName" element={<MovieName />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
