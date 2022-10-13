import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {}, //this is a function that will be called when we want to add a favorite
  removeFavorite: (id) => {}, //this is a function that will be called when we want to remove a favorite
});

function FavoritesProvider(props) {
  const [ids, setIds] = useState([]);

  function addFavorite(id) {
    setIds((currentIds) => [...currentIds, id]);
  }

  function removeFavorite(id) {
    setIds((currentIds) => currentIds.filter((currentId) => currentId !== id));
  }

  const context = {
    //this is the context object that will be passed to the components that will use the context
    ids,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesProvider };
