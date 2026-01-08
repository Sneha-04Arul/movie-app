import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = (page) =>
  axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });

export const searchMovies = (query, page) =>
  axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: API_KEY,
      query: query,
      page: page,
    },
  });
