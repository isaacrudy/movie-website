import React from "react";
import { useEffect, useState } from "react";
import {
  getNewMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../utils/api";
import MovieCards from "../components/MovieCards";
import "../styles/pagehome.css";
import HeroImage from "../components/HeroImage";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [newReleaseMovies, setNewReleaseMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [selectedList, setselectedList] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        data.results.sort((movie1, movie2) => {
          return movie2.popularity - movie1.popularity;
        });
        setPopularMovies(data.results);
        setselectedList("popular");
      })
      .catch((error) => {
        alert(error);
      });

    getNewMovies()
      .then((data) => {
        data.results.sort((movie1, movie2) => {
          return new Date(movie2.release_date) - new Date(movie1.release_date);
        });
        setNewReleaseMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });

    let filteredMovies = [];
    getUpcomingMovies("1")
      .then((data) => {
        filteredMovies = data.results.filter((movie) => {
          return new Date(movie.release_date) - Date.now() > 0;
        });
      })
      .then(() => {
        return getUpcomingMovies("2");
      })
      .then((data) => {
        const movieData = data.results.filter((movie) => {
          return new Date(movie.release_date) - Date.now() > 0;
        });
        if (!filteredMovies.some((movie) => movieData.includes(movie))) {
          filteredMovies = [...filteredMovies, ...movieData];
        }
      })
      .then(() => {
        return getUpcomingMovies("3");
      })
      .then((data) => {
        const movieData = data.results.filter((movie) => {
          return new Date(movie.release_date) - Date.now() > 0;
        });
        if (!filteredMovies.some((movie) => movieData.includes(movie))) {
          filteredMovies = [...filteredMovies, ...movieData];
        }
      })
      .then(() => {
        return getUpcomingMovies("4");
      })
      .then((data) => {
        const movieData = data.results.filter((movie) => {
          return new Date(movie.release_date) - Date.now() > 0;
        });
        if (!filteredMovies.some((movie) => movieData.includes(movie))) {
          filteredMovies = [...filteredMovies, ...movieData];
        }
      })
      .then(() => {
        return getUpcomingMovies("5");
      })
      .then((data) => {
        const movieData = data.results.filter((movie) => {
          return new Date(movie.release_date) - Date.now() > 0;
        });
        if (!filteredMovies.some((movie) => movieData.includes(movie))) {
          filteredMovies = [...filteredMovies, ...movieData];
        }
      })
      .then(() => {
        filteredMovies.sort((movie1, movie2) => {
          return new Date(movie1.release_date) - new Date(movie2.release_date);
        });
        setUpcomingMovies(filteredMovies);
      })
      .catch((error) => {
        alert(error);
      });

    getTopRatedMovies()
      .then((data) => {
        data.results.sort((movie1, movie2) => {
          return (
            movie2.vote_average.toFixed(1) - movie1.vote_average.toFixed(1)
          );
        });
        setTopRatedMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleSelectChange(event) {
    setselectedList(event.target.value);
  }

  return (
    <main id="home">
      {popularMovies && selectedList != "" && (
        <HeroImage movieData={popularMovies[0]} displayData={true} />
      )}
      <select id="list-select" onChange={handleSelectChange}>
        <option value={"popular"}>Popular</option>
        <option value={"newRelease"}>New Releases</option>
        <option value={"topRated"}>Top Rated</option>
        <option value={"upcoming"}>Upcoming</option>
      </select>
      {popularMovies && selectedList == "popular" && (
        <MovieCards movieList={popularMovies} sectionClass={"popular"} />
      )}
      {topRatedMovies && selectedList == "topRated" && (
        <MovieCards movieList={topRatedMovies} sectionClass={"popular"} />
      )}
      {upcomingMovies && selectedList == "upcoming" && (
        <MovieCards movieList={upcomingMovies} sectionClass={"popular"} />
      )}
      {newReleaseMovies && selectedList == "newRelease" && (
        <MovieCards movieList={newReleaseMovies} sectionClass={"popular"} />
      )}
    </main>
  );
}

export default PageHome;
