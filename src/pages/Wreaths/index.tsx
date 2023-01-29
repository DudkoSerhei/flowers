import React, { useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { Main, Select, WreathsCard } from '../../components';
import wreaths from '../../const/wreaths';

import styles from './index.module.scss';

const WreathsPage = () => {
  const [sort, setSort] = useState('default');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const sortedWreaths = wreaths.sort((first: any, second: any) => {
    if (sort === 'high') return parseFloat(first.price) - parseFloat(second.price);
    if (sort === 'low') return parseFloat(second.price) - parseFloat(first.price);
    return first.code.localeCompare(second.code, undefined, { numeric: true });
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Венки</h1>
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
            {sortedWreaths.map(({
              id = '',
              images = [],
              code = '',
              price = '',
              size = '',
            }) => (
              <WreathsCard
                className={styles.card}
                key={id}
                images={images}
                code={code}
                price={price}
                size={size}
              />
            ))}
          </div>
        </Main>
      </div>
    </div>
  )
};

export default WreathsPage;

