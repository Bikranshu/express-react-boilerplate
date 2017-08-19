// Import custom utils
import {fetch, store, update, destroy} from '../utils/apiUtil';
import * as Converter from '../utils/converter';

import {API_URL} from '../config/config';

export function fetchEntity(resourceName, data) {
    return fetch(API_URL, resourceName.toLowerCase());
}

export function fetchEntityById(resourceName, dataId) {
    return fetch(API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId));
}

export function storeEntity(resourceName, data) {
    return store(API_URL, resourceName.toLowerCase(), data);
}

export function updateEntity(resourceName, data, dataId) {
    return update(API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId), data);
}

export function destroyEntity(resourceName, dataId) {
    return destroy(API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId));
}