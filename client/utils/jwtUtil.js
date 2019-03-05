import jwtDecode from 'jwt-decode';
import {getLocalStorage} from './storageUtil';

export let isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
            return true;
        }
        
        return false;
    } catch (e) {
        return false;
    }
};

export let getToken = () => {
    return getLocalStorage('token');
};

export let isAuthenticated = () => {
    return !!getToken() && !isTokenExpired(getToken());
};
