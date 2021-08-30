import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Register
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Login
            </NavLink>
        </div>
    );
}