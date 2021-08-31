import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from 'components/ContactsListItem/';
import styles from 'components/ContactsList/ContactsList.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import List from '@material-ui/core/List';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <List className={styles.contactList}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => dispatch(contactsOperations.deleteContact(contact.id))}
        />
      ))}
    </List>
    // <ul >
    //   {contacts.map(contact => (
    //     <ContactsListItem
    //       key={contact.id}
    //       id={contact.id}
    //       name={contact.name}
    //       number={contact.number}
    //       onDeleteContact={() => dispatch(contactsOperations.deleteContact(contact.id))}
    //     />
    //   ))}
    // </ul>
  );
};