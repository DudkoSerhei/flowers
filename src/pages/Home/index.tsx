import React from 'react';

import { Main, About, Banner, Information } from '../../components';

import styles from './index.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Banner />
    <Main>
      <p className={styles.text}>
        Наша организация предлагает Вам <b className={styles.ritual_goods}>ритуальные товары </b>собственного производства.
        В ассортименте представлены <b className={styles.ritual_goods}>ритуальные венки</b> и <b className={styles.ritual_goods}>корзинки</b>, {' '}
        <b className={styles.ritual_goods}>искусственные цветы</b> разных размеров, различные <b className={styles.ritual_goods}>композиции</b>{' '}
        из исскуственных цветов любого наполнения и в разнообразной цветовой гамме.
      </p>
    </Main>
    <About />
    <Information />
  </div>
);

export default HomePage;
