export const SET_TOKEN = 'SET_TOKEN';
export const LOG_OUT   = 'LOG_OUT';

export function setToken() {
    return dispatch => {
        dispatch({
            type : SET_TOKEN
        });
    };
}

export function logOut() {
    return dispatch => {
        dispatch({
            type : LOG_OUT
        });
    };
}
