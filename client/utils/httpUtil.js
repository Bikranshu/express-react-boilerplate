import {httpBase} from './httpBaseUtil';

export const fetch = (endpoint) => {
    return httpBase()
        .get(endpoint);
};

export const store = (endpoint, data) => {
    return httpBase()
        .post(endpoint, data);
};

export const update = (endpoint, data) => {
    return httpBase()
        .put(endpoint, data);
};

export const destroy = (endpoint) => {
    return httpBase()
        .delete(endpoint);
};