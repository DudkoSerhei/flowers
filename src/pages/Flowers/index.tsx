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
          {flowers.map((flower) => (
            <FlowersCard
              key={flower.id}
              className={styles.card}
              image={flower.image}
              cod={flower.cod}
              title={flower.title}
              price={flower.price}
            />
          ))}
        </div>
      </Main>
    </div>
  </div>
);

export default FlowersPage;
