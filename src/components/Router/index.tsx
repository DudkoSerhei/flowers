import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  WreathsPage
} from '../../pages';

import { ROUTES } from '../../const';

const Router: FC = () => {
  const element = () => <p>Not found</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={element} />

        <Route path={ROUTES.ROOT} element={<HomePage />} />
        <Route path={ROUTES.WREATHS} element={<WreathsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
