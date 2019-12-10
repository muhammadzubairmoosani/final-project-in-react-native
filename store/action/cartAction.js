import {
    ADD_TO_CART,
    CLEAN_CART,
    // MESSAGE,
} from '../constants.js';

export default class cartAction {
    
    static sendArray(data) {
        return { type: 'NEW_ARRAY', payload: data }
    }
    static addTocartInAction(data) {
        return { type: ADD_TO_CART, payload: data }
    }
    // static _message(data) {
    //     return { type: MESSAGE, payload: data }
    // }
    static cleanCart(data) {
        return { type: CLEAN_CART, payload: data }
    }
    
}