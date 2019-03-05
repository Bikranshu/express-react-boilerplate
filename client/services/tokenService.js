import {getLocalStorage} from '../utils/storageUtil';
import * as AuthAction from '../actions/authAction';

export function verifyToken() {
    return (dispatch) => {
        const token = getLocalStorage('token');
        if (token) {
            dispatch(AuthAction.loginSuccess(token));
        }
    };
}