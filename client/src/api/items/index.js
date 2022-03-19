import axios from 'axios';

const URL = 'http://localhost:5000/items';

export const fetchItems = () => axios.get(URL);
export const createItem = (newItem) => axios.post(URL, newItem);
export const updateItem = (updatedItem, id) => axios.patch(`${URL}/${id}`, updatedItem);
export const deleteItem = (id) => axios.delete(`${URL}/${id}`);