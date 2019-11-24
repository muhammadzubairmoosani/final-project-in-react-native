import {
    LOADING,
    OPEN_FORM,
    SEARCH_ENG,
    CLOSE_FORM,
} from '../constants.js';

const initialState = {
    searchKey: '',
    displayClass: 'none',
    dataLoading: false
}

export default function search_form_loadingReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                dataLoading: action.payload
            }
        case SEARCH_ENG:
            return {
                ...state,
                searchKey: action.payload
            }
        case OPEN_FORM:
        case CLOSE_FORM:
            return {
                ...state,
                displayClass: action.payload
            }
        default:
            return state
    }
}