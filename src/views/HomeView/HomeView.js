import { Typography } from '@material-ui/core';
import styles from './HomeView.module.css';

export default function HomeView() {
    return (
        <div className={styles.container}>
            <Typography variant="h1">
                Welcome to the Phonebook Project!
            </Typography>
        </div> 
    );
}