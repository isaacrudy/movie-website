import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCards from "../components/MovieCards";
import "../styles/pagefavorite.css";

function PageFavorites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <main id="favorites-page">
      <h2>
        {favorites.length === 0 ? "No Favorites Saved" : "Favorite Movies"}
      </h2>
      <MovieCards movieList={favorites} sectionClass={"favorites"} />
    </main>
  );
}

export default PageFavorites;
