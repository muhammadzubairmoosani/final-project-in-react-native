import {
    // LOADING,
    USER_STATUS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    // SIGNOUT_SUCCESS,
    SIGNOUT_FAILURE
} from '../constants.js';

export default class authAction {
    // static loading(data) {
    //     return { type: LOADING, payload: data }
    // }

    static signUpSuccess(data) {
        return { type: SIGNUP_SUCCESS, payload: data }
    }

    static signuUpFailure(data) {
        return { type: SIGNUP_FAILURE, payload: data }
    }

    static signInSuccess(data) {
        return { type: SIGNIN_SUCCESS, payload: data }
    }

    static signInFailure(data) {
        return { type: SIGNIN_FAILURE, payload: data }
    }

    // static signOutSuccess(data) {
    //     return { type: SIGNOUT_SUCCESS, payload: data }
    // }

    static signOutFailure(data) {
        return { type: SIGNOUT_FAILURE, payload: data }
    }

    static userStatus(data) {
        return { type: USER_STATUS, payload: data }
    }
}