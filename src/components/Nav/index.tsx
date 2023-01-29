import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../const';

import styles from './index.module.scss';

const Navigation = ({ className }: any) => {
  return (
    <nav className={cn(styles.nav, className)}>
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
        <NavLink className={styles.link} to={ROUTES.COMPOSITIONS}>Композиции в горшках</NavLink>
      </li>
    </nav>
  )
}

export default Navigation;
