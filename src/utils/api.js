const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_ENDPOINT = "https://api.themoviedb.org/3/movie";
const IMG_BASE = "http://image.tmdb.org/t/p/";

function getPopularMovies() {
  return fetch(`${API_ENDPOINT}/popular?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response code was not ok.");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getMovieByID(id) {
  // https://api.themoviedb.org/3/movie/{movie_id}
  return fetch(`${API_ENDPOINT}/${id}?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response code was not ok.");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

export { getPopularMovies, getMovieByID, IMG_BASE };
