import { createContext, useState } from "react"
import PropTypes from 'prop-types'
import { filterDrinksService, getRecipeService } from "../services/drinks.service"

const DrinksContext = createContext(null)


const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState({});
    const getDrink = async (data) => {
        try {
            const { ingredient, category } = data
            setLoading(true)
            const drinkData = await filterDrinksService(ingredient, category)

            setDrinks(drinkData)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
const getRecipe = async (drinkId) =>{
    try {

        setLoading(true)

        const recipeData = await getRecipeService(drinkId)
        setRecipe(recipeData)

    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}
    const contextValue = {
        drinks,
        getDrink,
        loading,
        getRecipe
    }
    return (
        <DrinksContext.Provider value={contextValue}>
            {children}
        </DrinksContext.Provider>
    )
}

DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {
    DrinksContext,
    DrinksProvider
}