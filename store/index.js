import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './rootReducer/authReducer.js';
import cartReducer from './rootReducer/cartReducer.js';
import productReducer from './rootReducer/productReducer.js';
import search_form_loadingReducer from './rootReducer/search_form_loadingReducer';

const rootReducer = combineReducers({
    authReducer,
    cartReducer,
    productReducer,
    search_form_loadingReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;