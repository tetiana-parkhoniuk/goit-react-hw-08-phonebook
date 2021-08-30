import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
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

            <NavLink 
                to="/contacts" 
                className={styles.navLink} 
                activeClassName={styles.activeNavLink}
            >
                Phonebook
            </NavLink>
        </nav>
    )
}