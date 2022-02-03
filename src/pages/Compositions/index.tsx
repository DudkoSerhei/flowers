import React from 'react';

import { Main } from '../../components';
import CompositionsCard from '../../components/CompositionsCard';
import compositions from '../../const/compositions';

import styles from './index.module.scss';

const CompositionsPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Композиции</h1>
    <div className={styles.wrapper}>
      <Main>
        <div className={styles.product}>
          {compositions.map((composition) => (
            <CompositionsCard
              key={composition.id}
              className={styles.card}
              image={composition.image}
              cod={composition.cod}
              title={composition.title}
              price={composition.price}
            />
          ))}
        </div>
      </Main>
    </div>
  </div>
);

export default CompositionsPage;
