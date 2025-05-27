import { useEffect, useState } from "react";
import HeroImage from "../components/HeroImage";
import { getRandomPopularMovie } from "../utils/api";
import "../styles/pageabout.css";

function PageAbout() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    getRandomPopularMovie()
      .then(setMovieData)
      .catch((error) => console.error("Failed to load the movie", error));
  }, []);

  return (
    <main id="about">
      <div className="hero-wrapper">
        {movieData && <HeroImage movieData={movieData} displayData={false} />}
        <section className="about-section-1">
          <h1>ABOUT</h1>
          <p>Cinema Wave was born out of a shared love for cinema.</p>
          <p>
            Our team is made up of film buffs, industry experts, and tech
            enthusiasts who are dedicated to bringing you the best possible
            experience.
          </p>
          <p>
            We believe that movies have the power to inspire, entertain, and bring
            people together, and we’re committed to making CineBase the go-to
            resource for film lovers everywhere.
          </p>
        </section>
      </div>
      <div className="body-wrapper">
      <section className="about-section-2">
        <h2>Cinema Wave Advantage</h2>
        <ul>
          <li>
            <strong>Cast and Crew:</strong> Explore the talented individuals behind your favorite
            films.
          </li>
          <li>
            <strong>Plot Summaries:</strong> Get a quick overview of what each movie is about.
          </li>
          <li>
            <strong>Reviews and Ratings:</strong> Discover what critics and fellow movie lovers
            think.
          </li>
          <li>
            <strong>Trivia and Fun Facts:</strong> Dive into behind-the-scenes stories and
            little-known details.
          </li>
          <li>
            <strong>Streaming Links:</strong> Find out where to watch your next favorite movie.
          </li>
        </ul>
      </section>
      <section className="about-section-3">
        <h2>Why Choose Cinema Wave?</h2>
        <p>
          We’re more than just a database—we’re a community. Cinema Wave is
          designed to connect movie enthusiasts, spark conversations, and
          celebrate the art of filmmaking. Our intuitive interface makes it easy
          to search, explore, and discover new films, while our personalized
          features allow you to create watchlists, track your favorites, and
          share recommendations with friends.
        </p>
      </section>
      </div>
    </main>
  );
}

export default PageAbout;
