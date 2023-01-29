import React, { useState } from 'react';
import cn from 'classnames';
import Slider from "react-slick";
import { Dialog, DialogContent, Slide, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';

import { Dots } from '../index';

import styles from './index.module.scss';

interface ImageViewProps {
  className?: string,
  images: string[];
  size?: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PrevArrow = (props: any) => (
  <button {...props} type= "button" className={styles.view__leftBtn}>
    <svg className={styles.view__arrow} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M353 450a15 15 0 0 1-10.61-4.39L157.5 260.71a15 15 0 0 1 0-21.21L342.39 54.6a15 15 0 1 1 21.22 21.21L189.32 250.1l174.29 174.29A15 15 0 0 1 353 450Z" data-name="left"/>
    </svg>
  </button>
);

const NextArrow = (props: any) => (
  <button {...props} type= "button" className={styles.view__rightBtn}>
    <svg className={styles.view__arrow} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M202.1 450a15 15 0 0 1-10.6-25.61L365.79 250.1 191.5 75.81a15 15 0 0 1 21.21-21.21l184.9 184.9a15 15 0 0 1 0 21.21l-184.9 184.9A15 15 0 0 1 202.1 450Z" data-name="right"/>
    </svg>
  </button>
);

const settings = {
  className: styles.view__slider,
  fade: true,
  cssEase: 'ease-in-out',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const ImageView = ({ className, images, size = '' }: ImageViewProps) => {
  const [isFullView, setFullView] = useState(false);

  const handleOpen = () => setFullView(true);

  const handleClose = () => setFullView(false);

  return (
    <>
      <button className={cn(styles.view__button)} type='button' onClick={handleOpen}>
        <img className={cn(styles.view__img, className)} src={images[0]} alt={`view_${images[0]}`} loading='lazy' />
        <span className={styles.view__size}>{`${size}см`}</span>
      </button>
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
                  <img className={styles.view__detailedImage} src={img} alt={`view_${img}`} loading='lazy' />
                  {images.length > 1 && <Dots currentImage={img} images={images} />}
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
