import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import styles from 'components/ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleNameChange = event => {
    const { value } = event.currentTarget;
    setName(value);
  }

  const handleNumberChange = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )) {
      toast.error(`${name} is already in contacts.`);
    }
    else if (name.trim() === '' || number.trim() === '') {
      toast.error('Please enter at least some data');
    }
    else {
      dispatch(contactsOperations.createContact({ name, number }));
    }
    
    resetForm();
  };
  
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel} htmlFor={nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          className={styles.formInput}
          onChange={handleNameChange}
        />

        <label className={styles.formLabel} htmlFor={nameInputId}>
          Number
        </label>
        <input
          type="text"
          name="number"
          id={numberInputId}
          value={number}
          className={styles.formInput}
          onChange={handleNumberChange}
        />

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};