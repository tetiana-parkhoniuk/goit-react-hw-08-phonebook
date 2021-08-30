import styles from './LoginView.module.css';

export default function LoginView() {
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