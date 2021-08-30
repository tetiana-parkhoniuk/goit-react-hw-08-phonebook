import axios from 'axios';

axios.defaults.baseURL = 'https://612c1c8cab461c00178b5c10.mockapi.io';

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