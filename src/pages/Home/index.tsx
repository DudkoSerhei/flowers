import React from 'react';
import Banner from '../../components/Banner';

import { Main } from '../../components';

import styles from './index.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Banner />
    <Main>
      Главная страница
    </Main>
  </div>
);

export default HomePage;
