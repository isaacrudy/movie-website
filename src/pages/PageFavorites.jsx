import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCards from "../components/MovieCards";
import "../styles/pagefavorite.css";

function PageFavorites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <main id="favorites-page">
      <h2 className="no-favorites">
        {favorites.length === 0
          ? "No Favorites Saved. Add some of your favorite movies on the home page!"
          : "Favorite Movies"}
      </h2>
      <MovieCards movieList={favorites} sectionClass={"favorites"} />
    </main>
  );
}

export default PageFavorites;
