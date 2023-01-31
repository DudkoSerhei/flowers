import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { ReactSEOMetaTags } from 'react-seo-meta-tags';

import { Router } from './components';

const App: FC = () => {
  const siteMetadata = {
    url: 'https://okvenok.by',
    title:  'okvenok',
    datePublished: '2023-01-01T00:00:00.123Z',
    description: 'Ритуальные венки, корзины, композиции из искусственных цветов собственного производства по доступным ценам. ИП Поведайко В.М.',
    language: 'ru-RU',
    image: 'https://okvenok.by/logo.png',
    author: {
      email: 'povedaichik@mail.ru',
      name: 'Виктор Поведайко',
      image: 'https://okvenok.by/logo.png',
    },
    site: {
      siteName: 'okvenok',
      searchUrl: 'https://www.google.com/search?q=okvenok',
    }
  };

  return (
    <>
      <ReactSEOMetaTags
        render={(el: React.ReactNode) => <Helmet>{el}</Helmet>}
        website={{ ...siteMetadata }}
      />
      <Router />
    </>
  );
}

export default App;
