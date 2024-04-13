import axios from "axios";

const fetchCreditsMovies = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTJlYTQxYWE4NjRlMmE2MmE3MzZhODBkNmVjZWYxZiIsInN1YiI6IjY2MWE0MWZmNjllYjkwMDE3Y2I4MWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4s9nAUamX2WAFLQ1JXv-bwelgz5x_jMIR7VQ5bhyZM8",
    },
  };

  const response = await axios.get(url, options);

  return response.data.cast;
};

export { fetchCreditsMovies };
