import React from 'react';

import { Main } from '../index';

import styles from './index.module.scss';

const About = () => (
  <div className={styles.about}>
    <h1 className={styles.about__title}>Почему именно мы ?!</h1>
    <Main>
      <div className={styles.advantages}>
        <div className={styles.advantages__item}>
          <svg className={styles.advantages__icon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/>
          </svg>
          <p className={styles.advantages__text}>Работа без выходных</p>
        </div>
        <div className={styles.advantages__item}>
          <svg className={styles.advantages__icon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
          </svg>
          <p className={styles.advantages__text}>Широкий ассортимент</p>
        </div>
        <div className={styles.advantages__item}>
          <svg className={styles.advantages__icon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          </svg>
          <p className={styles.advantages__text}>Доступные цены</p>
        </div>
        <div className={styles.advantages__item}>
          <svg className={styles.advantages__icon} data-name="Слой 1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <circle cx="64" cy="49.64" r="20.55"/><path d="M112.34 47.82a8.26 8.26 0 0 0-1.69-11.73l-3.5-2.54a8.26 8.26 0 0 1-3.38-7.4l.37-4.31a8.26 8.26 0 0 0-7.76-9l-4.32-.24a8.26 8.26 0 0 1-6.84-4.4l-2-3.83a8.26 8.26 0 0 0-11.39-3.3L68.07 3.2a8.26 8.26 0 0 1-8.14 0l-3.76-2.13a8.26 8.26 0 0 0-11.38 3.34l-2 3.83a8.26 8.26 0 0 1-6.84 4.4l-4.32.24a8.26 8.26 0 0 0-7.76 9l.37 4.31a8.26 8.26 0 0 1-3.38 7.4l-3.5 2.54a8.26 8.26 0 0 0-1.69 11.73l2.64 3.42a8.26 8.26 0 0 1 1.16 8.05l-1.57 4a8.26 8.26 0 0 0 4.92 10.78l4.07 1.45a8.26 8.26 0 0 1 5.33 6.15l.78 3.8-10.39 33.77 16.48-5.16L49.35 128l9.37-30.63a8.26 8.26 0 0 0 10.07.37L78.65 128l10.26-13.88 16.48 5.16-10.64-32.64c.07-.23.13-.45.18-.69l.85-4.24a8.26 8.26 0 0 1 5.33-6.15l4.07-1.45a8.26 8.26 0 0 0 4.92-10.78l-1.57-4a8.26 8.26 0 0 1 1.16-8.05Zm-76.89 1.82A28.55 28.55 0 1 1 64 78.19a28.58 28.58 0 0 1-28.55-28.55Z"/>
          </svg>
          <p className={styles.advantages__text}>Высокое качество</p>
        </div>
        <div className={styles.advantages__item}>
          <svg className={styles.advantages__icon} viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M464.46 246.68 352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.024 32.024 0 0 0 0 395.96zm620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42z"/>
          </svg>
          <p className={styles.advantages__text}>Большой опыт работы</p>
        </div>
      </div>
    </Main>
  </div>
);

export default About;
