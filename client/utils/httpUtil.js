import axios from 'axios';
import {getLocalStorage} from './storageUtil';

export function fetch(url, endpoint) {
    return axios
        .get(url + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
            }
        });
}

export function store(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
            }
        });
}

export function update(url, endpoint, data) {
    return axios
        .put(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
            }
        });
}

export function destroy(url, endpoint) {
    return axios
        .delete(url + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
            }
        });
}