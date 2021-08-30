import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.entities;

export const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        )
    }
);

