import axios from 'axios';

const URL = 'http://localhost:5000/types';

export const fetchTypes = () => axios.get(URL);
export const createType = (newType) => axios.post(URL, newType);