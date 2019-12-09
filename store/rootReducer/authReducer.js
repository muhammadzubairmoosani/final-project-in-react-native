import {
    USER_STATUS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNOUT_FAILURE,
    // SIGNOUT_SUCCESS
} from '../constants.js';

const initialState = {
    user: {},
    message: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case USER_STATUS:
            return {
                ...state,
                user: action.payload,
            }
        case SIGNUP_FAILURE:
        case SIGNIN_FAILURE:
        case SIGNOUT_FAILURE:
            return {
                ...state,
                message: action.payload
            }
        // case SIGNOUT_SUCCESS:
        //     return {
        //         ...state,
        //     }
        default:
            return state
    }
}