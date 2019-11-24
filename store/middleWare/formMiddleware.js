import formAction from '../action/formAction';

export default class formAndSearchMiddleWare {
    static showForm(data) {
        return dispatch => dispatch(formAction.openForm(data));
    }

    static hideForm(data) {
        return dispatch => dispatch(formAction.closeForm(data));
    }
}
