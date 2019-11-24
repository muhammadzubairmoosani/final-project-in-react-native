import firebase from '../../config/firebase.js';
import authAction from '../action/authAction';

export default class authMiddleWare {
    static signUp(data) {
        return dispatch => {
            dispatch(authAction.loading(true));
            firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    dispatch(authAction.signUpSuccess(user));
                    dispatch(authAction.loading(false));
                })
                .catch(error => {
                    dispatch(authAction.signUpFailure(error));
                    dispatch(authAction.loading(false));
                });
        }
    }

    static isStatus() {
        return dispatch => {
            dispatch(authAction.loading(true));
            firebase
                .auth()
                .onAuthStateChanged(user => {
                    dispatch(authAction.userStatus(user));
                    dispatch(authAction.loading(false));
                });
        }
    }

    static signIn(data) {
        return dispatch => {
            dispatch(authAction.loading(true));
            firebase
                .auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    dispatch(authAction.signInSuccess(user));
                    dispatch(authAction.loading(false));
                }
                )
                .catch(error => {
                    dispatch(authAction.signInFailure(error));
                    dispatch(authAction.loading(false));
                })
        }
    }

    static signOut() {
        return dispatch => {
            dispatch(authAction.loading(true));
            firebase
                .auth()
                .signOut()
                .then(() => {
                    dispatch(authAction.signOutSuccess());
                    window.location.replace('/');
                    dispatch(authAction.loading(false));
                }
                )
                .catch(error => {
                    dispatch(authAction.signOutFailure(error));
                    dispatch(authAction.loading(false));
                });
        }
    }
}
