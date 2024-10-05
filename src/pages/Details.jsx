import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context';

const Details = () => {
    const { id } = useParams();
    const { recipeDetailsData, setRecipeDetailsData, handleFavorites, favoritesList } = useContext(GlobalContext);
    useEffect(() => {
        async function getRecipeDetails() {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            const data = await res.json();
            if (data.recipe) {
                setRecipeDetailsData(data.recipe)
            }
        }
        getRecipeDetails();
    }, [id])

    if (!recipeDetailsData) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='h-96 overflow-hidden rounded-xl group'>
                <img
                    src={recipeDetailsData.image_url}
                    className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    alt="Food image"
                />
            </div>
            <div className='flex flex-col gap-3'>
                <span className="text-sm text-cyan-700 font-medium">
                    {recipeDetailsData.publisher}
                </span>
                <h3 className="font-bold text-2xl truncate text-black">
                    {recipeDetailsData.title}
                </h3>
                <div>
                    <p className="text-lg text-cyan-700 font-medium mb-3">
                        Ingredients:
                    </p>
                    <ul className="flex flex-col gap-3">
                        {recipeDetailsData.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button
                        onClick={() => handleFavorites(recipeDetailsData)}
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
                    >
                        {favoritesList && favoritesList.length > 0 && favoritesList.find(
                            (item) => item.recipe_id === recipeDetailsData.recipe_id
                        )
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Details
