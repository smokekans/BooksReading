import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from './token';
import { baseUrl } from '../../API';

axios.defaults.baseURL = baseUrl;

export const signUpThunk = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('auth/register', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const googleSignUpThunk = createAsyncThunk(
    'auth/google',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('auth/google');
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signInThunk = createAsyncThunk(
    'auth/signin',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('auth/login', credentials);
            // token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logOutThunk = createAsyncThunk(
    'auth/signout',
    async ({ rejectWithValue }) => {
        try {
            await axios.post(`auth/logout`);
            token.unset();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refreshThunk = createAsyncThunk(
    'user/refresh',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('user/', credentials);
            token.set(data.data.user.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
