import { createContext, useReducer } from "react"
import PropTypes from 'prop-types'
import { cartReducer } from "../reducers/cartReducer";


const CartContext = createContext(null)
const init = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}
const CartProvider = ({ children }) => {
    

    const [cart, dispatch] = useReducer(cartReducer, [], init);



    const contextValue = {
        cart,
        dispatch

    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export {
    CartProvider,
    CartContext
}