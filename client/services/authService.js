import axios from 'axios';

// Import custom actionType
import * as AuthAction from '../actions/authAction';
import history from '../utils/history';

import {BASE_URL, API_URL} from '../config/config';
import {setToken, clearToken} from '../utils/storageUtil';

export function login({email, password}) {

    return function (dispatch) {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(AuthAction.loginSuccess(response.data.token));

            setToken(response.data.token);

            history.push('/dashboard');
            // window.location.href = BASE_URL + 'dashboard';
        })
            .catch((error) => {
                dispatch(AuthAction.loginFailure(error.response.data));
            });
    };
}

export function logout() {
    return function (dispatch) {

        clearToken();

        dispatch(AuthAction.logoutSuccess());

        history.push('/');
        // window.location.href = BASE_URL;
        return false;
    };
}