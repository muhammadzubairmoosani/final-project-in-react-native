import {
    ADD_TO_CART,
    MESSAGE
} from '../constants.js';

const initialState = {
    cartItems: {},
    message: ''
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: action.payload
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