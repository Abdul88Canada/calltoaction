import * as api from '../api/types';

import { FETCH_ALL_TYPES, CREATE_TYPE, UPDATE_TYPE, FETCH_ONE_TYPE, UPDATE_TYPE_COUNT, DELETE_TYPE } from './actionTypes';
//Action creator for getting all the types
export const getTypes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTypes();
        
        dispatch({type: FETCH_ALL_TYPES, payload: data});
        
    } catch (error) {
        console.log('ERROR!'+error);
    }
}
//action creator for creating a type
export const createType = (type) => async (dispatch) => {
    try {
        const {data} = await api.createType(type);
        dispatch({type: CREATE_TYPE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

//action creator for updating a type
export const updateType = (id, type) => async (dispatch) => {
    try {
        const {data} = await api.updateType(id, type);
        dispatch({type: UPDATE_TYPE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getOneType = (id) => async (dispatch) => {
    try {
        const {data} = await api.getOneType(id);
        dispatch({type: FETCH_ONE_TYPE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateTypeCount = (id, amount, operation) => async (dispatch) => {
    try {
        const {data} = await api.updateTypeCount(id, {amount, operation});
        dispatch({type: UPDATE_TYPE_COUNT, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteType = (id) => async (dispatch) => {
    try {
        await api.deleteType(id);
        dispatch({type: DELETE_TYPE, payload: id})
    } catch (error) {
        console.log(error);
    }
}