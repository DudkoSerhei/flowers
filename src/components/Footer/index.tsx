import React from 'react';

import { Main, Contacts } from '../index';

import styles from './index.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Contacts />
    <div className={styles.footer__wrapper}>
      <Main>
        <p className={styles.footer__text}>
          {`Поведайчик CORP © - ${new Date().getFullYear()}`}
        </p>
      </Main>
    </div>
  </footer>
);

export default Footer;
