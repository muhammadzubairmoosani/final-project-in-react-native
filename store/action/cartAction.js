import {
    ADD_TO_CART,
    REMOVE_ITEM,
    MESSAGE
} from '../constants.js';

export default class cartAction {
    static addTocartInAction(data) {
        return { type: ADD_TO_CART, payload: data }
    }

    static removeItemFromCart(data) {
        return { type: REMOVE_ITEM, payload: data }
    }

    static _message(data) {
        return { type: MESSAGE, payload: data }
    }
}