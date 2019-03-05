import axios from 'axios';

// Import custom actionType
import * as AuthAction from '../actions/authAction';
import history from '../utils/history';
import {API_URL} from '../config/config';
import {setLocalStorage, clearLocalStorage} from '../utils/storageUtil';

export function login({email, password}) {

    return function (dispatch) {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(AuthAction.loginSuccess(response.data.token));

            setLocalStorage('token', response.data.token);

            history.push('/dashboard');
        })
            .catch((error) => {
                dispatch(AuthAction.loginFailure(error.response.data));
            });
    };
}

export function logout() {
    return function (dispatch) {

        clearLocalStorage('token');

        dispatch(AuthAction.logoutSuccess());

        history.push('/');

        return false;
    };
}