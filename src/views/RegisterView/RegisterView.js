import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './RegisterView.module.css';
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <Typography variant="h2">
                Registration
            </Typography>

            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <TextField
                    label={"Name"}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Name Surname"
                    className={styles.input}
                />
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="email@mail.com"
                    className={styles.input}
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className={styles.input}
                />

                <Button
                    type="submit"
                    startIcon={<DoneAllIcon />}
                    variant="contained"
                    color="primary"
                    className={styles.btn}
                >
                    Register
                </Button>
            </form>
        </div>
    );
}