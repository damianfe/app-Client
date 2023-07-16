import { createContext, useEffect, useState } from 'react'
import { getCategoriesService } from '../services/categories.service';
import PropTypes from 'prop-types'

const CategoriesContext = createContext(null)


const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {

        try {
            const categoriesData = await getCategoriesService()
            setCategories(categoriesData)
            
        } catch (error) {
            console.error

        }
    }
    useEffect(() => {
        getCategories()
    }, [])
    const contextValue = {
        categories
    }

    return (

        <CategoriesContext.Provider value={contextValue}>
            {children}
        </CategoriesContext.Provider>
    )
}
CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export {
    CategoriesProvider,
    CategoriesContext
}