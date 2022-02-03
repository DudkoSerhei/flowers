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


const FlowersCard = ({className, image, cod, title, price}:Props) => (
  <div className={cn(styles.flowers, className)}>
    <img className={styles.flowers__img} src={image} alt="wreaths" />
    <p className={styles.flowers__cod}>{`Код: ${cod}`}</p>
    <h3 className={styles.flowers__title}>{title}</h3>
    <p className={styles.flowers__price}>Цена: <b className={styles.flowers__number}>{price}</b></p>
  </div>
);

export default FlowersCard;
