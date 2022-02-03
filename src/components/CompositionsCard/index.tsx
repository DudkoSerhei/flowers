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


const CompositionsCard = ({className, image, cod, title, price}:Props) => (
  <div className={cn(styles.compositions, className)}>
    <img className={styles.compositions__img} src={image} alt="wreaths" />
    <p className={styles.compositions__cod}>{`Код: ${cod}`}</p>
    <h3 className={styles.compositions__title}>{title}</h3>
    <p className={styles.compositions__price}>Цена: <b className={styles.compositions__number}>{price}</b></p>
  </div>
);

export default CompositionsCard;
