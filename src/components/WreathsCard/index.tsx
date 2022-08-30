import React from 'react';
import cn from 'classnames';

import ImageView from '../ImageView';

import styles from './index.module.scss';

interface Props {
  className?: string;
  image?: string;
  images?: string[];
  code: string;
  price: string;
};


const WreathsCard = ({className, image, images, code, price}:Props) => (
  <div className={cn(styles.wreaths, className)}>
    <ImageView image={image} images={images} />
    <div className={styles.wreaths__info}>
      <div className={styles.wreaths__column}>
        <p className={styles.wreaths__code}>{`Код: ${code}`}</p>
        <p className={styles.wreaths__variants}>{`Варианты: ${images?.length || '1'}шт`}</p>
      </div>
      <p className={styles.wreaths__price}>
        Цена: {price ? <b className={styles.wreaths__number}>{price}руб</b> : '???'}
      </p>
    </div>
  </div>
);

export default WreathsCard;
