import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjk0YTdmMmJmMWExMjBlMDZiM2I4MWY4YTZmM2MxYyIsInN1YiI6IjYwZDBmZjgwOGQxYjhlMDA1ZWIyNTFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAvTFnNwAK5pjroOrjdwH7zMfqiEc7OXKF5zBrx_mRk";

const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day?");

  return response.data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?&language=en-US`);

  return response.data;
};

const fetchCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?&language=en-US`);

  return response.data.cast;
};

const fetchReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?&language=en-US&page=1`
  );
  return response.data.results;
};

const fetchSearch = async (searchQuery) => {
  const response = await axios.get(
    `/search/movie?&language=en-US&page=1&query=${searchQuery}`
  );
  return response.data.results;
};

export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  fetchSearch,
};
