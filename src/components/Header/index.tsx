import React from 'react';

import { Logo, Nav, Main, MobileMenu } from '../index';

import styles from './index.module.scss';

const Header = () => {

  return (
    <header className={styles.header}>
      <Main>
        <Logo />
        <Nav className={styles.header__nav} />
        <MobileMenu className={styles.header__menu} />
      </Main>
    </header>
  )
};

export default Header;
