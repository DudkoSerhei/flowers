import React, { useState } from 'react';
import cn from 'classnames';
import Slider from "react-slick";
import { Dialog, DialogContent, Slide, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';

import styles from './index.module.scss';

interface ImageViewProps {
  className?: string,
  image?: string,
  images?: string[];
};

const settings = {
  className: styles.view__slider,
  dotsClass: styles.view__dots,
  fade: true,
  cssEase: 'ease-in-out',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageView = ({ className, image, images }: ImageViewProps) => {
  const [isFullView, setFullView] = useState(false);

  const handleOpen = () => setFullView(true);

  const handleClose = () => setFullView(false);

  return (
    <>
      {images && images?.length > 0 ?
        <button className={cn(styles.view__button)} type='button' onClick={handleOpen}>
          <img className={styles.view__img} src={image} alt={`view_${image}`} />
        </button> :
        <img className={cn(styles.view__img, className)} src={image} alt={`view_${image}`} />
      }
      {isFullView &&
        <Dialog
          open={isFullView}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
        >
          <DialogContent className={styles.view__content} classes={{ root: styles.view__content }}>
            <IconButton
              className={styles.view__close}
              onClick={handleClose}
            >
              <Close className={styles.view__closeIcon} />
            </IconButton>
            <Slider {...settings}>
              {images?.map((img) => (
                <div className={styles.view__slide}>
                  <img className={cn(styles.view__img, className)} src={img} alt={`view_${img}`} />
                </div>
              ))}
            </Slider>
          </DialogContent>
        </Dialog>
      }
    </>
  );
}

export default ImageView;
