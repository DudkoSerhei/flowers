import React from 'react';

import { Main } from '../../components';
import BasketsCard from '../../components/BasketsCard';
import baskets from '../../const/baskets';

import styles from './index.module.scss';

const BasketsPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Корзины</h1>
    <div className={styles.wrapper}>
      <Main>
        <div className={styles.product}>
          {baskets.map((basket) => (
            <BasketsCard
              key={basket.id}
              className={styles.card}
              image={basket.image}
              cod={basket.cod}
              title={basket.title}
              price={basket.price}
            />
          ))}
        </div>
      </Main>
    </div>
  </div>
);

export default BasketsPage;
