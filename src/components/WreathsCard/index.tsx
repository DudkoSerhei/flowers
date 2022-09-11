import React from 'react';
import cn from 'classnames';

import ImageView from '../ImageView';

import styles from './index.module.scss';

interface Props {
  className?: string;
  images: string[];
  code: string;
  price: string;
};


const WreathsCard = ({className, images, code, price}:Props) => (
  <div className={cn(styles.wreaths, className)}>
    <ImageView images={images} />
    <div className={styles.wreaths__info}>
      <p className={styles.wreaths__code}>{code}</p>
      {price &&
        <p className={styles.wreaths__price}>
          Цена: <b className={styles.wreaths__number}>{price}руб</b>
        </p>
      }
      {!price &&
        <p className={styles.wreaths__price}>
          Цену уточняйте
        </p>
      }
    </div>
  </div>
);

export default WreathsCard;
