import React from 'react';

import { Main } from '../../components';
import WreathsCard from '../../components/WreathsCard';
import wreaths from '../../const/wreaths';

import styles from './index.module.scss';

const MoundsPage = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Main>
        <div className={styles.product}>
          <p className={styles.product__text}>Раздел находится в стадии разработки.</p>
        </div>
      </Main>
    </div>
  </div>
);

export default MoundsPage;
