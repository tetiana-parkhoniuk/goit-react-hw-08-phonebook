import { v4 as uuidv4 } from 'uuid';
import styles from 'components/Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import { changeFilter } from '../../redux/contacts/contacts-slice';
import { TextField } from '@material-ui/core';

export default function Filter() {
  const id = uuidv4();
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={styles.filterContainer}>
      <TextField
        variant="outlined"
        type="text"
        label="Find contacts by name"
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};