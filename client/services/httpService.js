// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
import {getPathParam} from '../utils/serializeUtil';

export const fetchEntity = (entityName) => {
    return fetch(entityName.toLowerCase());
};

export const fetchEntityById = (entityName, dataId) => {
    return fetch(getPathParam(entityName.toLowerCase(), dataId));
};

export const storeEntity = (entityName, data) => {
    return store(entityName.toLowerCase(), data);
};

export const updateEntity = (entityName, data, dataId) => {
    return update(getPathParam(entityName.toLowerCase(), dataId), data);
};

export const destroyEntity = (entityName, dataId) => {
    return destroy(getPathParam(entityName.toLowerCase(), dataId));
};