// Import custom utils
import {fetch, store, update, destroy} from '../utils/apiUtil';
import * as Converter from '../utils/converter';

import {API_URL} from '../constants/app';

export function fetch(pathParam, data) {
    return fetch(API_URL, pathParam.toLowerCase());
}

export function store(resourceName, data) {
    return store(API_URL, resourceName.toLowerCase(), data);
}

export function update(resourceName, data, dataId) {
    return update(API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId), data);
}

export function destroy(resourceName, dataId) {
    return destroy(API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId));
}