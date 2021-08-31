import PropTypes from 'prop-types';
import styles from 'components/ContactsListItem/ContactsListItem.module.css';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar } from '@material-ui/core';

export default function ContactsListItem({
  id,
  name,
  number,
  onDeleteContact,
}) {
  return (
    <ListItem className={styles.contactItem}>
      <Avatar alt={name}></Avatar>
      <Typography variant="h5" className={styles.text}>
        {name}: {number}
      </Typography>

      <Button
        type="submit"
        startIcon={<DeleteIcon />}
        variant="contained"
        color="secondary"
        size="small"
        className={styles.btn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
