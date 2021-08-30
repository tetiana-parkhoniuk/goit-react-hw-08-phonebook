import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contactsAPI';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await contactsAPI.fetchContacts();
        return contacts;
    }
);

export const createContact = createAsyncThunk(
    'contacts/createContact',
    async (contact) => {
        const data = await contactsAPI.createContact(contact);
        return data;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        await contactsAPI.deleteContact(id);
        return id;
    }
);


