import {
    ADD_TO_CART,
    MESSAGE
} from '../constants.js';

export default class cartAction {
    static addTocartInAction(data) {
        return { type: ADD_TO_CART, payload: data }
    }
    static _message(data) {
        return { type: MESSAGE, payload: data }
    }
}