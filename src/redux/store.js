import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-slice';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV === 'development',
});

export default store;



