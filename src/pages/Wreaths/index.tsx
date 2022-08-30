import classNames from 'classnames';
import React from 'react';

import { Main } from '../../components';
import WreathsCard from '../../components/WreathsCard';
import wreaths from '../../const/wreaths';

import styles from './index.module.scss';

const WreathsPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Венки</h1>
    <div className={styles.wrapper}>
      <Main>
        <div className={styles.product}>
          {wreaths.map(({
            id,
            image,
            images = [],
            code,
            price,
          }) => (
            <WreathsCard
              className={styles.card}
              key={id}
              image={image}
              images={images}
              code={code}
              price={price}
            />
          ))}
        </div>
      </Main>
    </div>
  </div>
);

export default WreathsPage;

