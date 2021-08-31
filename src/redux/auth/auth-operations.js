import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../services/authAPI';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.register(credentials);
            token.set(data.token);
            toast.success('Welcome to the Phonebook!')
            return data;
        } catch (error) {
            toast.error(
                'Please check maybe you are already registered. Also, Name field requires your Name and Surname, and password should consist of numbers and leters, and at least 7 characters.'
            );
            return rejectWithValue(error.message);
        };
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.login(credentials);
            token.set(data.token);
            toast.success('Welcome back to the Phonebook');
            return data;
        } catch (error) {
            toast.warn('Please check your login details and try again');
            return rejectWithValue(error.message);
        };
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authAPI.logout();
            token.unset();
            toast.success('You have successfully logged out. See you later.');
        } catch (error) {
            toast.error('Something went wrong. Try to Log Out one more time.');
            return rejectWithValue(error.message);
        };
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);

        try {
            const data = await authAPI.fetchCurrentUser();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);
