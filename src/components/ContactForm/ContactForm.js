import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import styles from 'components/ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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
      toast.success('New contact was added.');
    }
    
    resetForm();
  };
  
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Name"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleNameChange}
          className={styles.input}
        />

        <TextField
          type="text"
          label="Number"
          name="number"
          id={numberInputId}
          value={number}
          onChange={handleNumberChange}
          className={styles.input}
        />
        
        <Button
          type="submit"
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          size="small"
          className={styles.btn}
        >
          Add contact
        </Button>
      </form>
    </>
  );
};