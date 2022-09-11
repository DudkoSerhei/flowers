import React from 'react';

import { Main } from '../../components';
import WreathsCard from '../../components/WreathsCard';
import wreaths from '../../const/wreaths';

import styles from './index.module.scss';

const MoundsPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Холмики на надгробия</h1>
    <div className={styles.wrapper}>
      <Main>
        <div className={styles.product}>
          {wreaths.map((wreath) => (
            <WreathsCard
              key={wreath.id}
              className={styles.card}
              images={wreath.images}
              code={wreath.code}
              price={wreath.price}
            />
          ))}
        </div>
      </Main>
    </div>
  </div>
);

export default MoundsPage;
