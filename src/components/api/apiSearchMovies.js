import axios from "axios";

const SearchMovies = async (searchInput) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTJlYTQxYWE4NjRlMmE2MmE3MzZhODBkNmVjZWYxZiIsInN1YiI6IjY2MWE0MWZmNjllYjkwMDE3Y2I4MWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4s9nAUamX2WAFLQ1JXv-bwelgz5x_jMIR7VQ5bhyZM8",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
};

export { SearchMovies };
