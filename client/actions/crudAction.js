import createHistory from 'history/createBrowserHistory';
const history = createHistory();

/**
 * Import all apiAction as an object.
 */
import * as apiAction from './apiAction';
import * as commonAction from './commonAction';

/**
 * Import all apiService as an object.
 */
import * as apiService from '../services/apiService';


/**
 * CRUD actions for the application.
 * Every time an action that requires the API is called, it first dispatch an "apiRequest" action.
 *
 * entity = 'Product', 'Employee', ...
 */


export function fetchAll(entity, data) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return apiService.fetchEntity(entity, data).then((response) => {
            dispatch(apiAction.apiResponse());
            dispatch(commonAction.list(entity, response.data));
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function fetchById(entity, id) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return apiService.fetchEntityById(entity, id).then((response) => {
            dispatch(apiAction.apiResponse());
            dispatch(commonAction.selectItem(entity, response.data));
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function storeItem(entity, data) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return apiService.storeEntity(entity, data).then((response) => {
            dispatch(apiAction.apiResponse());

            history.goBack();
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function updateItem(entity, data, id) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return apiService.updateEntity(entity, data, id).then((response) => {
            dispatch(apiAction.apiResponse());

            history.goBack();
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function destroyItem(entity, id, data) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return apiService.destroyEntity(entity, id).then((response) => {
            dispatch(apiAction.apiResponse());

            dispatch(fetchAll(entity, data));
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function submitForm(entity, data, id) {
    return function (dispatch) {
        if (id) {
            dispatch(updateItem(entity, data, id));
        } else {
            dispatch(storeItem(entity, data));
        }
    }
}