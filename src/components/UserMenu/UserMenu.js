import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    
    return (
        <div className={styles.container}>
            <Avatar alt={name}></Avatar>
            <span className={styles.text}>Welcome, {name}</span>
            <Button
                type="button"
                onClick={() => dispatch(authOperations.logout())}
                variant="contained"
                color="secondary"
            >
                Log Out
            </Button>
        </div>
    );
}