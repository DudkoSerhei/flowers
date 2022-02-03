import React from 'react';

import { Main, About, Banner, Information } from '../../components';

import styles from './index.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Banner />
    <div className={styles.text_wrapper}>
      <Main>
        <p className={styles.text}>
          Наша организация предлагает Вам <b className={styles.ritual_goods}>ритуальные товары </b>собственного производства.
          В ассортименте представлены <b className={styles.ritual_goods}>ритуальные венки</b> и <b className={styles.ritual_goods}>корзинки</b>, {' '}
          <b className={styles.ritual_goods}>искусственные цветы</b> разных размеров, различные <b className={styles.ritual_goods}>композиции</b>{' '}
          из исскуственных цветов любого наполнения и в разнообразной цветовой гамме.
        </p>
      </Main>
    </div>
    <Main>
      <div className={styles.mode}>
        <h3 className={styles.mode__title}>Режим работы</h3>
        <ul className={styles.mode__list}>
          <li className={styles.mode__item}>
            Пн: 9:00-19:00
          </li>
          <li className={styles.mode__item}>
            Вт: 9:00-19:00
          </li>
          <li className={styles.mode__item}>
            Ср: 9:00-19:00
          </li>
          <li className={styles.mode__item}>
            Чт: 9:00-19:00
          </li>
          <li className={styles.mode__item}>
            Пт: 9:00-19:00
          </li>
          <li className={styles.mode__item}>
            Сб: 10:00-17:00
          </li>
          <li className={styles.mode__item}>
            Вс: 10:00-17:00
          </li>
        </ul>
      </div>
    </Main>
    <About />
    <Information />
  </div>
);

export default HomePage;
