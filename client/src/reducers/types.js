export default (types = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [... types, action.payload];
            default:
                return types;
    }
};