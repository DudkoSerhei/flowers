import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { Main, Footer } from '../index';
import { ROUTES } from '../../const';

import styles from './index.module.scss';

const MobileMenu = ({ className }: any) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      const x=window.scrollX;
      const y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
      document.body.classList.add('stop-scrolling');
    } else {
      window.onscroll=function(){};
      document.body.classList.remove('stop-scrolling');
    };
  }, [isOpen]);

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
              <NavLink className={styles.menu__link} to={ROUTES.COMPOSITIONS} onClick={toggleMenu}>Композиции в горшках</NavLink>
            </li>
          </nav>
        </Main>
        <Footer className={styles.menu__footer} isContacts={false} />
      </section>
    </div>
  );
};

export default MobileMenu;
