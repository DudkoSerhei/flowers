import React from 'react';

import { Main } from '../index';

import styles from './index.module.scss';

const Information = () => (
  <div className={styles.info}>
    <h1 className={styles.info__title}>Информация для покупателя</h1>
    <Main>
      <div className={styles.info__wrapper}>
        <p className={styles.info__text}>
          ИП Поведайко Виктор Михайлович
        </p>
        <p className={styles.info__text}>
          Исполком администрации Октябрьского района г.Гродно
        </p>
        <p className={styles.info__text}>
          УНП: <b>290186012</b>
        </p>
        <p className={styles.info__text}>
          Регистрационный орган: <b>Исполком администрации Октябрьского района г.Гродно</b>
        </p>
        <p className={styles.info__text}>
          Дата регистрации компании: <b>10.08.2010</b>
        </p>
        <p className={styles.info__text}>
          Местонахождение книги замечаний и предложений: <b>г. Гродно 231700, ул. Пролетарская, 38</b>
        </p>
      </div>
    </Main>
  </div>
);

export default Information;
