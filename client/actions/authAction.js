// Import actionType constants
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../constants/actionType';

export function loginSuccess(data) {
    return {
        type: LOG_IN_SUCCESS,
        data
    }
}

export function loginFailure(error) {
    return {
        type: LOG_IN_FAILURE,
        error
    }
}

export function logoutSuccess() {
    return {
        type: LOG_OUT_SUCCESS
    }
}

export function signupSuccess(data) {
    return {
        type: SIGN_UP_SUCCESS,
        data
    }
}

export function signupFailure(error) {
    return {
        type: SIGN_UP_FAILURE,
        error
    }
}