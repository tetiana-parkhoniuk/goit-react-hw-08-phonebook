import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const fetchContacts = async () => {
    const response = await axios.get(`/contacts`);
    return response.data;
};

export const createContact = async (contact) => {
    const response = await axios.post(`/contacts`, contact);
    return response.data;
};

export const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`);
};

export const register = async (credentials) => {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.token);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    return response.data;
};

export const logout = async () => {
    await axios.post('/users/logout');
    token.unset();
};

export const fetchCurrentUser = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
};