import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import RecipeItem from '../components/RecipeItem'

const Home = () => {
    const { recipeList, loading } = useContext(GlobalContext)
    if (loading) return <div className='text-center mt-4 text-red-700 text-2xl'>Loading..Please wait!</div>
    return (
        <div className="container py-8 flex flex-wrap justify-center gap-10 mx-auto">
            {recipeList && recipeList.length > 0
                ? recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
                : <div className="lg:text-4xl text-xl text-center font-semibold py-20">Nothing to show. Please search something</div>}

        </div>
    )
}

export default Home
