import {push} from 'connected-react-router';

import {isAuthenticated} from '../utils/jwtUtil';

export const verifyToken = () => {
    return dispatch => {
        if (isAuthenticated()) {
            dispatch(push('/dashboard'));
        }
    };
};