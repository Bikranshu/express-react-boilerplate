import axios from 'axios';
import {getToken} from './storageUtil'

export function fetch(url, endpoint) {
    return axios
        .get(url + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function store(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function update(url, endpoint, data) {
    return axios
        .put(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function destroy(url, endpoint) {
    return axios
        .delete(url + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}