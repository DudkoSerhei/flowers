import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { Main, Select, WreathsCard } from '../../components';
import baskets from '../../const/baskets';

import styles from './index.module.scss';

const BasketsPage = () => {
  const [sort, setSort] = useState('default');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const sortedBaskets = baskets.sort((first: any, second: any) => {
    if (sort === 'high') return parseFloat(first.price) - parseFloat(second.price);
    if (sort === 'low') return parseFloat(second.price) - parseFloat(first.price);
    return first.code.localeCompare(second.code);
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзины</h1>
      <div className={styles.wrapper}>
        <Main>
          <div className={styles.product__header}>
            {/* <p className={styles.product__title}>Венки в ассортименте. Индивидуальные работы по желанию заказчика. Примеры в карусели.</p> */}
            <Select
              className={styles.product__select}
              value={sort}
              onChange={handleChange}
              label='Сортировка'
              items={[
                { value: 'default', label: 'По умолчанию' },
                { value: 'low', label: 'Цена (убывание)' },
                { value: 'high', label: 'Цена (возрастание)' },
              ]}
            />
          </div>
          <div className={styles.product}>
            {sortedBaskets.map(({
              id,
              images = [],
              code,
              price,
            }) => (
              <WreathsCard
                className={styles.card}
                key={id}
                images={images}
                code={code}
                price={price}
              />
            ))}
          </div>
        </Main>
      </div>
    </div>
  )
};

export default BasketsPage;

