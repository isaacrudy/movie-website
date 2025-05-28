const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_ENDPOINT = "https://api.themoviedb.org/3/movie";
const IMG_BASE = "https://image.tmdb.org/t/p/";

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

function getNewMovies() {
  return fetch(`${API_ENDPOINT}/now_playing?api_key=${API_KEY}`)
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

function getUpcomingMovies(page) {
  return fetch(`${API_ENDPOINT}/upcoming?api_key=${API_KEY}&page=${page}`)
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

function getTopRatedMovies() {
  return fetch(`${API_ENDPOINT}/top_rated?api_key=${API_KEY}`)
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

function getRecommendedMovies(id) {
  return fetch(`${API_ENDPOINT}/${id}/recommendations?api_key=${API_KEY}`)
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

function getRandomPopularMovie() {
  return fetch(`${API_ENDPOINT}/popular?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response code was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      const movies = data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    })
    .catch((error) => {
      throw error;
    });
}

export {
  getPopularMovies,
  getNewMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getMovieByID,
  getRecommendedMovies,
  getRandomPopularMovie,
  IMG_BASE,
};
