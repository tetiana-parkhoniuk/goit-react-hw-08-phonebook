import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


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