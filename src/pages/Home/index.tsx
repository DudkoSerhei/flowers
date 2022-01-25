import React from 'react';

import { Header, Footer } from '../../components';

import styles from './index.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Header />
      Home page
    <Footer />
  </div>
);

export default HomePage;