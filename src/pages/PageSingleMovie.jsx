import React from "react";
import { useState, useEffect } from "react";
import "../styles/pagesinglemovie.css";
import { getMovieByID, getRecommendedMovies, IMG_BASE } from "../utils/api";
import { useParams } from "react-router-dom";
import { formatMovieDate } from "../utils/toolbelt";
import FavoriteButton from "../components/FavoriteButton";
import MovieCard from "../components/MovieCard";

function PageSingleMovie() {
  const [movieData, setMovieData] = useState();
  const [recommendeds, setRecommendeds] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieByID(id)
      .then((data) => {
        setMovieData(data);
      })
      .catch((error) => {
        alert(error);
      });

    getRecommendedMovies(id)
      .then((data) => {
        console.log(data.results);
        setRecommendeds(data.results.slice(0, 4));
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);

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
          <div className="single-movie-display">
            <h1 className="movie-title">{movieData.title}</h1>
            <h2 className="release-date">
              Release Date: {formatMovieDate(movieData.release_date)}
            </h2>
            <FavoriteButton movieData={movieData} />
            <ul className="tags">
              {movieData.genres.map((genre) => {
                console.log(genre.name);
                return (
                  <li key={genre.id} className="tag">
                    {genre.name}
                  </li>
                );
              })}
              {console.log(movieData)}
            </ul>
            <span className="single-movie-rating">
              ⭐{movieData.vote_average.toFixed(1)}
            </span>
            <p className="summary">{movieData.overview}</p>
            {recommendeds.length == 0 ? (
              ""
            ) : (
              <section className="recommendations">
                <h2>You May Also Like...</h2>
                <div className="movie-list">
                  {recommendeds.map((movie) => {
                    return <MovieCard key={movie.id} movieData={movie} />;
                  })}
                </div>
              </section>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default PageSingleMovie;
