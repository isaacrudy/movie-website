import React from "react";
import { useState, useEffect } from "react";
import "../styles/pagesinglemovie.css";
import { getMovieByID, IMG_BASE } from "../utils/api";
import { useParams } from "react-router-dom";
import { formatMovieDate } from "../utils/toolbelt";
import FavoriteButton from "../components/FavoriteButton";

function PageSingleMovie() {
  const [movieData, setMovieData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMovieByID(id)
      .then((data) => {
        setMovieData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <main id="single-movie-page">
      {movieData && (
        <>
          <div className="backdrop-container">
            <img
              src={`${IMG_BASE}/w1280/${movieData.backdrop_path}`}
              alt={movieData.overview}
              className="backdrop"
            />
          </div>
          <h1>{movieData.title}</h1>
          <h2>Release Date: {formatMovieDate(movieData.release_date)}</h2>
          <FavoriteButton movieData={movieData} />
        </>
      )}
    </main>
  );
}

export default PageSingleMovie;
