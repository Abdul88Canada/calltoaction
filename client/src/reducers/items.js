export default (items = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_ITEMS':
            return action.payload;
        case 'CREATE_ITEM': 
            return [... items, action.payload];
        case 'UPDATE_ITEM':
            return items.map((item) => item._id === action.payload._id ? action.payload : item );
        default:
                return items;
    }
};