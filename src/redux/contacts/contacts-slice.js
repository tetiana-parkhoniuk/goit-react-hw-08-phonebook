import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, createContact, deleteContact } from './contacts-operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { entities: [], status: null, error: null, filter: '' },
    reducers: {
        changeFilter: (state, {payload}) => {state.filter = payload},
    },
    extraReducers: {
        [fetchContacts.fulfilled]: (state, { payload }) => {
            state.entities = payload;
            state.status = null;
            state.error = null;
        },
        [fetchContacts.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = 'Error';
        },

        [createContact.fulfilled]: (state, {payload}) => {
            state.entities = [payload, ...state.entities];
            state.status = null;
            state.error = null;
         },
        [createContact.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [createContact.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = 'Error';
        },
        
        [deleteContact.fulfilled]: (state, {payload}) => {
            state.entities = state.entities.filter((contact) =>
                contact.id !== payload);
            state.status = null;
            state.error = null;
         },
        [deleteContact.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deleteContact.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = 'Error';
        },
    },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
