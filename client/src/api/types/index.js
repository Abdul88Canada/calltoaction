import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchTypes = (email) => API.get('/types', { params: { email: email } });
export const createType = (newType) => API.post('/types', newType);
export const updateType = (updatedType, id) => API.patch(`/types/${id}`, updatedType);
export const getOneType = (id) => API.get(`/types/${id}`);
export const updateTypeCount = (id, {amount, operation}) => API.patch(`/types/${id}/updateCount`, {amount, operation});
export const deleteType = (id) => API.delete(`/types/${id}`);