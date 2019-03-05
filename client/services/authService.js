import axios from 'axios';

import {loginSuccess, loginFailure, logoutSuccess} from '../actions/authAction';
import history from '../utils/history';
import {API_URL} from '../config/config';
import {setLocalStorage, clearLocalStorage} from '../utils/storageUtil';

export function login({email, password}) {

    return function (dispatch) {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(loginSuccess(response.data.token));

            setLocalStorage('token', response.data.token);

            history.push('/dashboard');
        })
            .catch((error) => {
                dispatch(loginFailure(error.response.data));
            });
    };
}

export function logout() {
    return function (dispatch) {

        clearLocalStorage('token');

        dispatch(logoutSuccess());

        history.push('/');

        return false;
    };
}