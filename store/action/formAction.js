import {
    OPEN_FORM,
    CLOSE_FORM,
} from '../constants.js';

export default class formAction {
    static openForm(data) {
        return { type: OPEN_FORM, payload: data }
    }

    static closeForm(data) {
        return { type: CLOSE_FORM, payload: data }
    }
}