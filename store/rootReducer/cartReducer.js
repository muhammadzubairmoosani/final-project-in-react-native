import {
    ADD_TO_CART,
    REMOVE_ITEM,
    MESSAGE
} from '../constants.js';

const initialState = {
    cartItems: [],
    message: ''
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            initialState.cartItems.push(action.payload[0])
            return {
                ...state,
                cartItems: initialState.cartItems
            }
        case REMOVE_ITEM:
            initialState.cartItems = initialState.cartItems.filter((item, index) => index !== action.payload);
            return {
                ...state,
            }
        case MESSAGE: {
            return {
                ...state,
                message: action.payload
            }
        }
        default:
            return state
    }
}