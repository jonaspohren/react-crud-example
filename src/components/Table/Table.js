import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Table.module.css';

const Table = ({ rows, remove }) => (
  rows.length ?
    <table className={styles.Table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) =>
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td width="10%">
              <NavLink to={`/user/edit/${index}`}>Edit</NavLink>
            </td>
            <td width="10%">
              <Button type="button" value="Remove" className={styles.remove} click={() => remove(index)}/>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  : null
);

export default Table;