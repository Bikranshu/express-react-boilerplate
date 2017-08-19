import axios from 'axios';

// Import custom actionType
import * as AuthAction from '../actions/authAction';
import * as ApiAction from '../actions/apiAction';

import {BASE_URL, API_URL} from '../constants/app';
import {setToken, clearToken} from '../utils/storageUtil';

export function login({email, password}) {

    return function (dispatch) {

        dispatch(ApiAction.apiRequest());

        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(AuthAction.loginSuccess(response.data.token));

            setToken(response.data.token);

            window.location.href = BASE_URL + 'dashboard';
        })
            .catch((error) => {
                dispatch(AuthAction.loginFailure(error));
            });
    };
}

export function logout() {
    return function (dispatch) {

        clearToken();

        dispatch(AuthAction.logoutSuccess());

        window.location.href = BASE_URL;
        return false;
    };
}

export function signup({firstname, lastname, email, password}) {

}