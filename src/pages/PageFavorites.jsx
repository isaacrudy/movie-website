import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import "../styles/pagefavorite.css";

function PageFavorites() {
  const { favorites, isFavorite, addFavorites, removeFromFavorites } =
    useContext(GlobalContext);

  return (
    <main id="favorites-page">
      <h2>
        {favorites.length === 0 ? "No Favorites Saved" : "Favorite Movies"}
      </h2>
      <section className="movie-cards popular">
        {favorites.map((movieData) => {
          return <MovieCard key={movieData.id} movieData={movieData} />;
        })}
      </section>
    </main>
  );
}

export default PageFavorites;
