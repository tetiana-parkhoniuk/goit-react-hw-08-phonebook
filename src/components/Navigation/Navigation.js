import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav className={styles.nav}>
            <NavLink
                exact
                to="/" 
                className={styles.navLink} 
                activeClassName={styles.activeNavLink}
            >
                Home
            </NavLink>

            {isLoggedIn && (
                <NavLink
                to="/contacts" 
                className={styles.navLink} 
                activeClassName={styles.activeNavLink}
            >
                Phonebook
            </NavLink>
            )}
        </nav>
    )
}