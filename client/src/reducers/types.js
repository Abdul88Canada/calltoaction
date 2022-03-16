export default (types = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [... types, action.payload];
        case 'UPDATE':
            return types.map((type) => type._id == action.payload._id ? action.payload : type);
        default:
                return types;
    }
};