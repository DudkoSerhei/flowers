import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';

import logo from './logo.png';
import styles from './index.module.scss';

interface LogoProps {
  className?: string,
  onClick?: () => void;
};

const Logo = ({ className, onClick = () => {} }: LogoProps) => (
  <Link className={cn(styles.logo, className)} onClick={onClick} to={ROUTES.ROOT}>
    <img
      className={styles.logo__icon}
      src={logo}
      alt="Logo"
    />
  </Link>
);

export default Logo;
