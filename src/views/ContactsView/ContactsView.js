import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import styles from './ContactsView.module.css';
import { Typography } from '@material-ui/core';

export default function ContactsView() {
  return (
    <div className={styles.container}>
      <Typography variant="h1">
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h2">
        Contacts List
      </Typography>
      <Filter />
      <ContactsList />
    </div>
  ); 
};
