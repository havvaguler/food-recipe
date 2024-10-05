import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);
            const data = await res.json();
            if (data.recipes) {
                setLoading(false);
                setRecipeList(data.recipes);
                setSearchParam('');
            }

        }
        catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleFavorites(getCurrentItem) {
        const isFavorite = favoritesList.find(item => {
            return item.recipe_id === getCurrentItem.recipe_id
        })
        if (isFavorite) {
            setFavoritesList(oldVersion => oldVersion.filter(item => item.recipe_id !== getCurrentItem.recipe_id))
        }
        else {
            setFavoritesList(oldVersion => [...oldVersion, getCurrentItem])
        }
    }

    return <GlobalContext.Provider value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleFavorites,
        favoritesList
    }}
    >
        {children}
    </GlobalContext.Provider>
}

