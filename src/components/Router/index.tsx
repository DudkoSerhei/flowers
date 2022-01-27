import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  HomePage,
  WreathsPage,
  BasketsPage,
  MoundsPage,
  FlowersPage,
  CompositionsPage 
} from '../../pages';
import { Header, Footer } from '../index';

import { ROUTES } from '../../const';

const Router: FC = () => {
  const element = () => <p>Not found</p>;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={element} />

        <Route path={ROUTES.ROOT} element={<HomePage />} />
        <Route path={ROUTES.WREATHS} element={<WreathsPage />} />
        <Route path={ROUTES.BASKETS} element={<BasketsPage />} />
        <Route path={ROUTES.MOUNDS} element={<MoundsPage />} />
        <Route path={ROUTES.FLOWERS} element={<FlowersPage />} />
        <Route path={ROUTES.COMPOSITIONS} element={<CompositionsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
