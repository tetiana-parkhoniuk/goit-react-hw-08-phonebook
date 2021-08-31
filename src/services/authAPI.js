import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = async (credentials) => {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post('/users/login', credentials);
    return response.data;
};

export const logout = async () => {
    await axios.post('/users/logout');
};

export const fetchCurrentUser = async (_, thunkAPI) => {
    const response = await axios.get('/users/current');
    return response.data;
};