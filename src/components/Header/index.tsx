import React from 'react';

import { Logo, Nav, Main } from '../index';

import styles from './index.module.scss';

const Header = () => {

  return (
    <header className={styles.header}>
      <Main>
        <Logo />
        <Nav />
      </Main>
    </header>
  )
};

export default Header;
