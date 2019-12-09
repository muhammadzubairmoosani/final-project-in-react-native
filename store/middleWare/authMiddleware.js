import firebase from '../../config/firebase.js';
import authAction from '../action/authAction';
export default class authMiddleWare {
    static signUp(data) {
        return dispatch => {
            // dispatch(authAction.loading(true));
            firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    dispatch(authAction.signUpSuccess(user));
                    // dispatch(authAction.loading(false));
                })
                .catch(error => {
                    dispatch(authAction.signUpFailure(error));
                    // dispatch(authAction.loading(false));
                });
        }
    }
    static isStatus() {
        return dispatch => {
            // dispatch(authAction.loading(true));
            firebase
                .auth()
                .onAuthStateChanged(user => {
                    dispatch(authAction.userStatus(user));
                    // dispatch(authAction.loading(false));
                });
        }
    }
    static signIn(data) {
        return dispatch => {
            firebase
                .auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(user => dispatch(authAction.signInSuccess(user)))
                .catch(error => dispatch(authAction.signInFailure(error)))
        }
    }
    static signOut() {
        return dispatch => {
            firebase
                .auth()
                .signOut()
                .then(() => console.log('signOut Successfully!'))
                .catch(error => dispatch(authAction.signOutFailure(error)));
        }
    }
}