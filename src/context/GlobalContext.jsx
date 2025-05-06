import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorites(newFave) {
    setFavorites([...favorites, newFave]);
  }

  function removeFromFavorites(id) {
    const newFavorites = favorites.filter((movie) => {
      return movie.id !== id;
    });
    setFavorites(newFavorites);
  }

  function isFavorite(id) {
    return favorites.some((movie) => {
      return movie.id === id;
    });
  }

  return (
    <GlobalContext.Provider
      value={{ favorites, addFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
