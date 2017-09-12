import { SET_TOKEN, LOG_OUT } from '../actions/SessionActions.js';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { state, token: true };
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}
