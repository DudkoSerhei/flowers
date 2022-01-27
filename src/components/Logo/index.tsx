import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';

import styles from './index.module.scss';

const Logo = () => (
  <Link className={styles.logo} to={ROUTES.ROOT}>
    Flowers
  </Link>
);

export default Logo;
