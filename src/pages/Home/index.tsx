import React from 'react';

import { Main, About, Banner } from '../../components';

import styles from './index.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Banner />
    <Main>
      <p className={styles.text}>
        Мы ценим время клиентов, выбравших в качестве своего бизнеса помощь людям в трудные минуты их жизни. <br/>
        Наша организация предлагает Вам <b className={styles.text__bold}>ритуальные товары </b>собственного производства.
        В ассортименте представлены <b className={styles.text__bold}>ритуальные венки</b> и <b className={styles.text__bold}>корзины</b>, {' '}
        <b className={styles.text__bold}>искусственные цветы,</b> различные <b className={styles.text__bold}>композиции</b>{' '}
        из исскуственных цветов любого наполнения и в разнообразной цветовой гамме. <br/>
        Договор на ритуальные комплектующие оптом, мелким или крупным, можно заключить обратившись к нам любым
        удобным для вас способом.
      </p>
    </Main>
    <About />
  </div>
);

export default HomePage;
