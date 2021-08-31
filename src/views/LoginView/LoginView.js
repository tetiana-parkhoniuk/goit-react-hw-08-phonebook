import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './LoginView.module.css';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(authOperations.login({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <Typography variant="h2">
                Login
            </Typography>

            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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
                    startIcon={<PermIdentityIcon />}
                    variant="contained"
                    color="secondary"
                    className={styles.btn}
                >
                    Login
                </Button>
            </form>
        </div>
    );
}