import { FETCH_ALL_TYPES, CREATE_TYPE, UPDATE_TYPE, FETCH_ONE_TYPE, UPDATE_TYPE_COUNT,  DELETE_TYPE } from '../actions/actionTypes';


export default (types = [], action) => {
    switch(action.type) {
        case FETCH_ALL_TYPES:
            return action.payload;
        case CREATE_TYPE:
            return [... types, action.payload];
        case UPDATE_TYPE:
            return types.map((type) => type._id === action.payload._id ? action.payload : type);
        case FETCH_ONE_TYPE:
            return types.filter((type) => type._id === action.payload._id);
        case UPDATE_TYPE_COUNT:
            return types.filter((type) => type._id === action.payload);
            case DELETE_TYPE:
                return types.filter((type) => type._id !== action.payload);
        default:
                return types;
    }
};