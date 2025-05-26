import React from "react";
import { IMG_BASE } from "../utils/api";
import { formatMovieDate } from "../utils/toolbelt";
import { Link, useNavigate } from "react-router-dom";
import "../styles/heroimage.css";
import FavoriteButton from "./FavoriteButton";

function HeroImage({ movieData }) {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => {
        navigate(`/movie/${movieData.id}`);
      }}
      className="hero-image"
    >
      <picture>
        <source 
          media="(min-width:30em)"
          srcset={`${IMG_BASE}/w1280/${movieData.backdrop_path}`}
        />
        <img
          src={`${IMG_BASE}/w500/${movieData.poster_path}`}
          alt={movieData.title}
        />
      </picture>
      <div className="hero-gradient">
        <div className="hero-title">
          <FavoriteButton movieData={movieData} />
          <h2 className="title">{movieData.title}</h2>
        </div>
        <p className="release">{formatMovieDate(movieData.release_date)}</p>
        <p className="summary">
          {movieData.overview}...
        </p>
      </div>
    </section>
  );
}

export default HeroImage;
