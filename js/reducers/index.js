import { combineReducers } from 'redux';

import addReducer from './add';
import navReducer from './nav';

export default combineReducers({
    add: addReducer,
    nav: navReducer
})
