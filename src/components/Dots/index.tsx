import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface DotsProps {
  images: string[],
  currentImage?: string;
};

const Dots = ({ images, currentImage }: DotsProps) => (
  <div className={styles.dots}>
    {images.map((image: string) => {
      const dotClassName = cn(styles.dots__item, {
        [styles.dots__item_current]:image === currentImage,
      });

      return <span className={dotClassName} />
    })}
  </div>
);

export default Dots;
