import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './LoginView.module.css';

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
        <div>
            <h2>Login Page</h2>

            <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
                <label style={styles.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                
                <label style={styles.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}