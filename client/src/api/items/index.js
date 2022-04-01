import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});



export const fetchItems = (email) => API.get('/items', { params: { email: email } });
export const createItem = (newItem) => API.post('/items', newItem);
export const updateItem = (updatedItem, id) => API.patch(`'/items'/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`'/items'/${id}`);