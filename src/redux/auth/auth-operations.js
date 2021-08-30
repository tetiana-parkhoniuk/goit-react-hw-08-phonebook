import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contactsAPI';

export const register = createAsyncThunk(
    'auth/register',
    async (credentials) => {
        const data = await contactsAPI.register(credentials);
        return data;
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        const data = await contactsAPI.login(credentials);
        return data;
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await contactsAPI.logout();
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const data = await contactsAPI.fetchCurrentUser(_, thunkAPI);
        return data;
    },
);
