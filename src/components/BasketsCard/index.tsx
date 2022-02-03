import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface Props {
  className?: string;
  image: string;
  cod: number;
  title: string;
  price: string;
};


const BasketsCard = ({className, image, cod, title, price}:Props) => (
  <div className={cn(styles.baskets, className)}>
    <img className={styles.baskets__img} src={image} alt="baskets" />
    <p className={styles.baskets__cod}>{`Код: ${cod}`}</p>
    <h3 className={styles.baskets__title}>{title}</h3>
    <p className={styles.baskets__price}>Цена: <b className={styles.baskets__number}>{price}</b></p>
  </div>
);

export default BasketsCard;
