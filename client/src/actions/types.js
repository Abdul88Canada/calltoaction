import * as api from '../api';
//Action creator for getting all the types

export const getTypes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTypes();
        
        dispatch({type: 'FETCH_ALL', payload: data});
        
    } catch (error) {
        console.log('ERROR!'+error);
    }
}
//action creator for creating a type
export const createType = (type) => async (dispatch) => {
    try {
        const {data} = await api.createType(type);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}