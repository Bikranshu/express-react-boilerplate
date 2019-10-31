import axios from 'axios';

import {loginSuccess, loginFailure, logoutSuccess} from '../actions/authAction';
import history from '../utils/history';
import {API_URL, JWT_TOKEN} from '../config/config';
import {setLocalStorage, clearLocalStorage} from '../utils/storageUtil';

export const login = ({email, password}) => {

    return dispatch => {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(loginSuccess(response.data.token));

            setLocalStorage(JWT_TOKEN, response.data.token);

            history.push('/dashboard');
        })
            .catch((error) => {
                dispatch(loginFailure(error.response.data));
            });
    };
};

export const logout = () => {
    return dispatch => {

        clearLocalStorage(JWT_TOKEN);

        dispatch(logoutSuccess());

        history.push('/');

        return false;
    };
};