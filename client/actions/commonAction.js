import {
    LIST,
    DELETE,
    SELECT_ITEM,
    CLEAR_LIST,
    FAILURE
} from '../constants/actionType';

export function failure(error) {
    return {
        type: FAILURE,
        error: error
    }
}

export function list(entity, data) {
    return {
        type: LIST,
        entity: entity,
        data: data
    }
}

export function destroy(entity, id) {
    return {
        type: DELETE,
        entity: entity,
        id: id
    }
}

export function selectItem(entity, data) {
    return {
        type: SELECT_ITEM,
        entity: entity,
        data: data
    }
}

export function clearList(entity) {
    return {
        type: CLEAR_LIST,
        entity: entity
    }
}