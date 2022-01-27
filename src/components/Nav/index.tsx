import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../const';

import styles from './index.module.scss';


const Navigation = () => {

  return (

    <nav className={styles.nav}>
      <li className={styles.item}>
        <NavLink className={styles.link} to={ROUTES.WREATHS} >Венки ритуальные</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to={ROUTES.BASKETS}>Корзины ритуальные</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to={ROUTES.MOUNDS}>Холмики на надгробия</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to={ROUTES.FLOWERS}>Цветы искусственные</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to={ROUTES.COMPOSITIONS}>Композиции (икебана)</NavLink>
      </li>
    </nav>
  )
}

export default Navigation;
