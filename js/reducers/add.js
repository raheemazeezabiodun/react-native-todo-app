import { createReducer } from '../utils';
import {
    CREATE_TODO_REQUEST,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAILURE,
} from '../constants';


const initialState = {
    isSaving: false,
    saved: false,
    error: null
};

export default createReducer(initialState, {
    [CREATE_TODO_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isSaving: true,
            saved: false,
            error: null
        });
    },
    [CREATE_TODO_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            isSaving: false,
            saved: true,
            error: null
        });
    },
    [CREATE_TODO_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            isSaving: false,
            saved: false,
            error: payload.error
        });
    },
});