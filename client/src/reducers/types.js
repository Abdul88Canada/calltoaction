export default (types = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_TYPES':
            return action.payload;
        case 'CREATE_TYPE': 
            return [... types, action.payload];
        case 'UPDATE_TYPE':
            return types.map((type) => type._id === action.payload._id ? action.payload : type);
        default:
                return types;
    }
};