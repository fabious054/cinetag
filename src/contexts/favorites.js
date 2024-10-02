import { createContext,useState,useContext } from 'react';

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favorites';

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;


export function useFavoriteContext(){
    const {favorite,setFavorites} = useContext(FavoritesContext);

    function addFavorite(newFav){
        const favExist = favorite.some(fav => fav.id === newFav.id);
        let newFavorites = [...favorite];
        if(!favExist){
            newFavorites.push(newFav);
            return setFavorites(newFavorites);
        }

        newFavorites.splice(newFavorites.findIndex(fav => fav.id === newFav.id),1);
        return setFavorites(newFavorites);
    }

    return {favorite,addFavorite};
}