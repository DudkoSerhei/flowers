import React, { ReactElement } from 'react';

import styles from './index.module.scss';

interface MainProps {
  children: ReactElement | ReactElement[] | string,
};

const Main = (props: MainProps) => {
  const { children } = props;

  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export default Main;
