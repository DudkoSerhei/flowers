import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'; 

import wreaths1 from './wreaths.png';
import wreaths2 from './wreaths2.png';
import styles from './index.module.scss';

const PrevArrow = (props: any) => (
  <button {...props} type= "button" className={styles.leftBtn}>
    <svg className={styles.arrow} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M353 450a15 15 0 0 1-10.61-4.39L157.5 260.71a15 15 0 0 1 0-21.21L342.39 54.6a15 15 0 1 1 21.22 21.21L189.32 250.1l174.29 174.29A15 15 0 0 1 353 450Z" data-name="left"/>
    </svg>
  </button>
);

const NextArrow = (props: any) => (
  <button {...props} type= "button" className={styles.rightBtn}>
    <svg className={styles.arrow} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M202.1 450a15 15 0 0 1-10.6-25.61L365.79 250.1 191.5 75.81a15 15 0 0 1 21.21-21.21l184.9 184.9a15 15 0 0 1 0 21.21l-184.9 184.9A15 15 0 0 1 202.1 450Z" data-name="right"/>
    </svg>
  </button>
);

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Banner = () => {

  return (
    <Slider {...settings}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <h1 className={styles.title}>Ритуальные услуги</h1>
          <Link to="" className={styles.btn}>Перейти в раздел</Link>
        </div>
        <img className={styles.img} src={wreaths1} alt="wreaths" />
      </div>
      <div className={styles.container}>
        <div className={styles.banner}>
          <h1 className={styles.title}>Ритуальные услуги</h1>
          <Link to="" className={styles.btn}>Перейти в раздел</Link>
        </div>
        <img className={styles.img} src={wreaths2} alt="wreaths" />
      </div>
    </Slider>
  )
};

export default Banner;
