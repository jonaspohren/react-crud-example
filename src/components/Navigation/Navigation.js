import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <div className={styles.Navigation}>
    <NavLink activeClassName={styles.active} to="/user/create">Create User</NavLink>
    <NavLink activeClassName={styles.active} to="/user/list">List Users</NavLink>
  </div>
);

export default Navigation;