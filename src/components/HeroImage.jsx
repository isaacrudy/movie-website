import React from "react";
import { IMG_BASE } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";

function HeroImage({ movieData }) {
const navigate = useNavigate();

  return (
    <section
      onClick={() => {
        navigate(`/movie/${movieData.id}`);
      }}
        className="hero-image"
    >
      <img
        src={`${IMG_BASE}/w342/${movieData.backdrop_path}`}
        alt={movieData.overview}
      />
    </section>
  );
}

export default HeroImage;
