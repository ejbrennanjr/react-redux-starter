import {combineReducers} from 'redux';
import friends from './friendReducer';
import categories from './categoryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Using ES6 shorthand property names.  Could have read {courses:courses}
const rootReducer = combineReducers({
    friends,
    categories,
    ajaxCallsInProgress
});

export default rootReducer;
