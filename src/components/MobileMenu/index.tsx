import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { Main, Logo } from '../index';
import { ROUTES } from '../../const';

import styles from './index.module.scss';

const MobileMenu = ({ className }: any) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.onscroll = function () { window.scrollTo(0, 0); };
    }
  }, [isOpen]);

  const toggleMenu = () => setOpen((prev) => !prev);

  const buttonClassName = cn(styles.menu__button, {
    [styles.menu__button_active]: isOpen,
  });

  const sectionClassName = cn(styles.menu__section, {
    [styles.menu__section_open]: isOpen,
  });

  return (
    <div className={cn(styles.menu, className)}>
      <button type='button' className={buttonClassName} onClick={toggleMenu}>
        <span className={styles.menu__icon} />
      </button>
      <section className={sectionClassName}>
        <Main>
          <Logo className={styles.menu__logo} onClick={toggleMenu} />
          <nav className={styles.menu__nav}>
            <li className={styles.menu__item}>
              <NavLink className={styles.menu__link} to={ROUTES.WREATHS} onClick={toggleMenu}>Венки ритуальные</NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink className={styles.menu__link} to={ROUTES.BASKETS} onClick={toggleMenu}>Корзины ритуальные</NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink className={styles.menu__link} to={ROUTES.MOUNDS} onClick={toggleMenu}>Холмики на надгробия</NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink className={styles.menu__link} to={ROUTES.FLOWERS} onClick={toggleMenu}>Цветы искусственные</NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink className={styles.menu__link} to={ROUTES.COMPOSITIONS} onClick={toggleMenu}>Композиции (икебана)</NavLink>
            </li>
          </nav>
        </Main>
      </section>
    </div>
  );
};

export default MobileMenu;
