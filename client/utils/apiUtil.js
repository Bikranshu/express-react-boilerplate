import axios from 'axios';
import {getToken} from './storageUtil'

export function fetch(url, pathParam) {
    return axios
        .get(url + pathParam, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}

export function store(url, pathParam, data) {
    return axios
        .post(url + pathParam, data, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}

export function update(url, pathParam, data) {
    return axios
        .put(url + pathParam, data, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}

export function destroy(url, pathParam) {
    return axios
        .delete(url + pathParam, {
            headers: {'Authorization': 'Bearer' + ' ' + getToken()}
        });
}