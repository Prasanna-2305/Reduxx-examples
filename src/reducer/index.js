import convertNumber from "./Counter";
import AsuncAction from "./AsuncAction";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    convertNumber,
    AsuncAction
});

export default rootReducer;