import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context'

const Navbar = () => {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)
    return (
        <nav className='flex justify-between items-center py-8 container flex-col lg:flex-row gap-5 '>
            <h2 className='text-4xl font-semibold'>
                <NavLink to='/' className='text-gray-600  hover:text-blue-800'>FoodRecipe</NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter items..'
                    className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 text-2xl"
                    name='search'
                    value={searchParam}
                    onChange={e => setSearchParam(e.target.value)}
                />
            </form>
            <ul className='flex items-center justify-between gap-8'>
                <li>
                    <NavLink
                        to='/'
                        className="text-gray-600  hover:text-blue-800 duration-300 text-2xl"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorites"
                        className="text-gray-600  hover:text-blue-800 duration-300 text-2xl"
                    >
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
