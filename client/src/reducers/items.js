export default (items = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_ITEMS':
            return action.payload;
        case 'CREATE_ITEM': 
            return [... items, action.payload];
            default:
                return items;
    }
};