import Storage from 'react-native-simple-store';
import { Toast } from 'native-base';

import { CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE } from '../constants';

export function createTodoRequest() {
    return {
        type: CREATE_TODO_REQUEST
    }
}

export function createTodoSuccess() {
    Toast.show({
        text: 'Todo created successfully',
        position: 'bottom',
        buttonText: 'Okay',
        duration: 2000
    });
    return {
        type: CREATE_TODO_SUCCESS
    }
}

export function createTodoFailure(error) {
    Toast.show({
        text: `Error occured ${error}`,
        position: 'top',
        type: 'danger'
    });
    return {
        type: CREATE_TODO_FAILURE,
        payload: {
            error
        }
    }
}

export function createTodo(todo) {
    return (dispatch => {
        dispatch(createTodoRequest());
        Storage.save(`${todo}`, todo)
            .then(() => { dispatch(createTodoSuccess()); })
            .catch((error) => createTodoFailure(error))
    })
}