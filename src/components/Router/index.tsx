import React, { FC, useState } from 'react';
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
import { FlowersContext } from '../context';

import { ROUTES } from '../../const';

const Router: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);
  const element = () => <p>Not found</p>;

  return (
    <FlowersContext.Provider
      value={{
        open: isOpen,
        toggleOpen,
      }}
    >
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
    </FlowersContext.Provider>
  );
};

export default Router;
