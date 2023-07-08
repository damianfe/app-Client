import { createContext } from "react"
import PropTypes from 'prop-types'
import { useState } from "react"
import useDrinks from "../hooks/useDrinks"

const CartContext =createContext(null)

const CartProvider = ({children}) => {

const [cart,setCart] =useState([]);
const{drinks} = useDrinks()
const addCart = (idDrink) =>{
let drinkItemCart = drinks.find(drink => drink.idDrink === idDrink)


setCart([...cart, drinkItemCart])
}

const contextValue ={
    cart,
    addCart
}
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes ={
    children: PropTypes.node.isRequired
}
export {
    CartProvider,
    CartContext
}