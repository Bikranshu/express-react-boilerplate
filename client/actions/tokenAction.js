import {getToken} from '../utils/storageUtil';
import * as AuthAction from './authAction';

export function verifyToken() {
    return (dispatch) => {
        const token = getToken();
        if (token) {
            dispatch(AuthAction.loginSuccess(token));
        }
    };
}