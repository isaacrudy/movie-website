import React from "react";
import "../styles/moviecard.css";
import { IMG_BASE } from "../utils/api";
import { formatMovieDate } from "../utils/toolbelt";
import { Link, useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function MovieCard({ movieData }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/movie/${movieData.id}`);
      }}
      className="movie-card"
    >
      <img
        src={`${IMG_BASE}/w342/${movieData.poster_path}`}
        alt={movieData.overview}
        className="poster"
      />
      <div className="backdrop">
        <h2 className="title">{movieData.title}</h2>
        <h3 className="release">{formatMovieDate(movieData.release_date)}</h3>
        <span className="summary">
          {movieData.overview.substring(0, 75)}...
        </span>
        <span className="rating">
          Rating: {movieData.vote_average.toFixed(1)}
        </span>
        <FavoriteButton movieData={movieData} />
      </div>
    </div>
  );
}

export default MovieCard;
