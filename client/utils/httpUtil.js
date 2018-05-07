import axios from 'axios';
import {getToken} from './storageUtil'

export function fetch(url, endpoint) {
    return axios
        .get(url + endpoint, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}

export function store(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}

export function update(url, endpoint, data) {
    return axios
        .put(url + endpoint, data, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}

export function destroy(url, endpoint) {
    return axios
        .delete(url + endpoint, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}