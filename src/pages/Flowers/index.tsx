import React from 'react';

import { Main } from '../../components';
import FlowersCard from '../../components/FlowersCard';
import flowers from '../../const/flowers';

import styles from './index.module.scss';

const FlowersPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Цветы искусственные</h1>
    <div className={styles.wrapper}>
      <Main>
        <div className={styles.product}>
          <p className={styles.product__text}>Раздел находится в стадии разработки.</p>
        </div>
      </Main>
    </div>
  </div>
);

export default FlowersPage;
