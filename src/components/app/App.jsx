import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const Header = lazy(() => import("../header/header.jsx"));
const HomePage = lazy(() => import("../../pages/homePage/homePage.jsx"));
const MoviesPage = lazy(() => import("../../pages/moviesPage/moviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/movieDetailsPage/movieDetailsPage.jsx")
);
const MovieCast = lazy(() =>
  import("../../components/movieCast/movieCast.jsx")
);
const MovieReviews = lazy(() =>
  import("../../components/movieReviews/movieReviews.jsx")
);
const NotFound = lazy(() => import("../../pages/notFound/notFound.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
