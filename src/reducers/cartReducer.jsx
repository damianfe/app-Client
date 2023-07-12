import { types } from "../types";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case types.addItemToCart:

            return [...state, action.payload];
        case types.removeItemFromCart:
            return state.filter((item) => item.idDrink !== action.payload);
            
        case types.removeAllItemsFromCart:
            return state.filter((item) => item.idDrink !== action.payload);
        default:
            return state;
    }
};
