import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';

import styles from './index.module.scss';

const Logo = ({ className, onClick = () => {} }: any) => (
  <Link className={cn(styles.logo, className)} onClick={onClick} to={ROUTES.ROOT}>
    Flowers
  </Link>
);

export default Logo;
