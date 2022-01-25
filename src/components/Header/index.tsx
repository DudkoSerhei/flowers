import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../index';

import styles from './index.module.scss';

const Header = () => {
  const links = [
    'Венки ритуальные',
    'Корзины ритуальные',
    'Холмики на надгробия',
    'Цветы искусственные',
    'Композиции (икебана)'
  ];

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__nav}>
        {links.map(link => (
          <Link className={styles.header__link} to=''>{link}</Link>
        ))}
      </div>
    </header>
  )
};

export default Header;