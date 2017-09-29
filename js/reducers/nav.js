import { TodoApp } from '../App';


const initialState = TodoApp.router.getStateForAction(TodoApp.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
    const newState = TodoApp.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer;