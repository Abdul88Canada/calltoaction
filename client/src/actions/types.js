import * as api from '../api/types';
//Action creator for getting all the types

export const getTypes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTypes();
        
        dispatch({type: 'FETCH_ALL_TYPES', payload: data});
        
    } catch (error) {
        console.log('ERROR!'+error);
    }
}
//action creator for creating a type
export const createType = (type) => async (dispatch) => {
    try {
        const {data} = await api.createType(type);
        dispatch({type: 'CREATE_TYPE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

//action creator for updating a type
export const updateType = (id, type) => async (dispatch) => {
    try {
        const {data} = await api.updateType(id, type);
        dispatch({type: 'UPDATE_TYPE', payload: data});
    } catch (error) {
        console.log(error);
    }
}