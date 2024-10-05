import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from '../components/RecipeItem';

const Favorites = () => {
    const { favoritesList } = useContext(GlobalContext);
    return (
        <div className="container py-8 mx-auto">
            {favoritesList && favoritesList.length > 0 ? (
                <div>
                    <h2 className="text-3xl font-bold text-center mb-6">My Favorite Recipes</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {favoritesList.map((item) => (
                            <RecipeItem key={item.recipe_id} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="lg:text-4xl text-xl text-center font-semibold py-20">
                    Nothing is added to favorites.
                </div>
            )}
        </div>
    );
}

export default Favorites;


