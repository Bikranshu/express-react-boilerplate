import {getLocalStorage} from '../utils/storageUtil';
import {loginSuccess} from '../actions/authAction';

export function verifyToken() {
    return (dispatch) => {
        const token = getLocalStorage('token');
        if (token) {
            dispatch(loginSuccess(token));
        }
    };
}