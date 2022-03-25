import { combineReducers } from "redux";

import types from './types';
import items from './items';
import auth from './auth';

// combine reducers here
export default combineReducers({items, types, auth});