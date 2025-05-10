import "../styles/favoritebutton.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movieData }) {
  const { isFavorite, addFavorites, removeFromFavorites } =
    useContext(GlobalContext);

  const isFavorited = isFavorite(movieData.id);

  function handleButtonClick(event) {
    event.stopPropagation();
    if (isFavorited) {
      removeFromFavorites(movieData.id);
    } else {
      addFavorites(movieData);
    }
  }

  return (
    <span className="fav-button" onClick={handleButtonClick}>
      {isFavorited ? "❤️" : "🤍"}
    </span>
  );
}

export default FavoriteButton;
