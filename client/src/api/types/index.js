import axios from 'axios';

const URL = 'http://localhost:5000/types';

export const fetchTypes = () => axios.get(URL);
export const createType = (newType) => axios.post(URL, newType);
export const updateType = (updatedType, id) => axios.patch(`${URL}/${id}`, updatedType);
export const getOneType = (id) => axios.get(`${URL}/${id}`);
export const updateTypeCount = (id, {amount, operation}) => axios.patch(`${URL}/${id}/updateCount`, {amount, operation});