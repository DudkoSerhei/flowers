import React from 'react';

import { Main } from '../index';

import work from './images/work.svg';
import range from './images/range.svg';
import price from './images/price.svg';
import quality from './images/quality.svg';
import experience from './images/experience.svg';

import styles from './index.module.scss';

const About = () => (
  <div className={styles.advantages__about}>
    <Main>
      <div className={styles.advantages}>
        <div className={styles.advantages__item}>
          <img className={styles.advantages__icon} src={work} alt='Work' />
          <p className={styles.advantages__text}>Работа без выходных</p>
        </div>
        <div className={styles.advantages__item}>
          <img className={styles.advantages__icon} src={range} alt='Range' />
          <p className={styles.advantages__text}>Широкий ассортимент</p>
        </div>
        <div className={styles.advantages__item}>
          <img className={styles.advantages__icon} src={price} alt='Price' />
          <p className={styles.advantages__text}>Доступные цены</p>
        </div>
        <div className={styles.advantages__item}>
          <img className={styles.advantages__icon} src={quality} alt='Quality' />
          <p className={styles.advantages__text}>Высокое качество</p>
        </div>
        <div className={styles.advantages__item}>
          <img className={styles.advantages__icon} src={experience} alt='Experience' />
          <p className={styles.advantages__text}>Большой опыт работы</p>
        </div>
      </div>
    </Main>
  </div>
);

export default About;
