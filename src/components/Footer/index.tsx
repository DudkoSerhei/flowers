import React from 'react';

import { Main, Contacts } from '../index';

import styles from './index.module.scss';

const Footer = ({ isContacts = true }) => (
  <footer className={styles.footer}>
    {isContacts && <Contacts />}
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
