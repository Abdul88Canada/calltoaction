import { FETCH_ALL_ITEMS, CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../actions/actionTypes";

export default (items = [], action) => {
    switch(action.type) {
        case FETCH_ALL_ITEMS:
            return action.payload;
        case CREATE_ITEM: 
            return [... items, action.payload];
        case UPDATE_ITEM:
            return items.map((item) => item._id === action.payload._id ? action.payload : item );
        case DELETE_ITEM:
            return items.filter((item) => item._id !== action.payload);
        default:
            return items;
    }
};