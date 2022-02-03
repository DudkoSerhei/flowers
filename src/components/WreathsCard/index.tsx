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


const WreathsCard = ({className, image, cod, title, price}:Props) => (
  <div className={cn(styles.wreaths, className)}>
    <img className={styles.wreaths__img} src={image} alt="wreaths" />
    <p className={styles.wreaths__cod}>{`Код: ${cod}`}</p>
    <h3 className={styles.wreaths__title}>{title}</h3>
    <p className={styles.wreaths__price}>Цена: <b className={styles.wreaths__number}>{price}</b></p>
  </div>
);

export default WreathsCard;
