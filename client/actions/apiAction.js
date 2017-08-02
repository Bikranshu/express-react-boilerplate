// Import actionType constants
import {API_REQUEST, API_RESPONSE} from '../constants/actionType';

export function apiRequest() {
    return {
        type: API_REQUEST
    }
}
export function apiResponse() {
    return {
        type: API_RESPONSE
    }
}