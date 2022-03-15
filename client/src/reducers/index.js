import { combineReducers } from "redux";

import types from './types';
import items from './items';

// combine reducers here
export default combineReducers({types}, {items});