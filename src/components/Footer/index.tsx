import React from 'react';
import cn from 'classnames';

import { Main, Contacts } from '../index';

import styles from './index.module.scss';

const Footer = ({ className = '', isContacts = true }) => (
  <footer className={cn(styles.footer, className)}>
    {isContacts && <Contacts />}
    <div className={styles.footer__wrapper}>
      <Main>
        <p className={styles.footer__text}>
          {`okvenok © - ${new Date().getFullYear()}`}
        </p>
      </Main>
    </div>
  </footer>
);

export default Footer;
