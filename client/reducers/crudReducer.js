import {
    ENTITY_CREATE,
    ENTITY_UPDATE,
    ENTITY_LIST,
    SELECT_ENTITY_ITEM,
    ENTITY_DELETE,
    CLEAR_ENTITY_LIST
} from '../constants/actionType';


let initialState = {
    products: [],
    selectedItem: {
        product: {},
    }
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;
    let newState;

    switch (action.type) {
        case ENTITY_CREATE:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case ENTITY_UPDATE:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case ENTITY_LIST:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case ENTITY_DELETE:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case SELECT_ENTITY_ITEM:
            newState.selectedItem[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case CLEAR_ENTITY_LIST:
            newState[action.entity] = {};
            return newState;

        default:
            return state;
    }
}