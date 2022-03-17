import * as api from '../api/items';
//Action creator for getting all the types

export const getItems = () => async (dispatch) => {
    try {
        const {data} = await api.fetchItems();
        dispatch({type: 'FETCH_ALL_ITEMS', payload: data});
    } catch (error) {
        console.log('ERROR!'+error);
    }
}
//action creator for creating a type
export const createItem = (item) => async (dispatch) => {
    try {
        const {data} = await api.createItem(item);
        dispatch({type: 'CREATE_ITEM', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateItem = (id, item) => async (dispatch) => {
    try {
        const {data} = await api.updateItem(id, item);
        dispatch({type: 'UPDATE_ITEM', payload: data});
    } catch (error) {
        console.log(error);
    }
}