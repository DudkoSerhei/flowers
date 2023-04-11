import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { ReactSEOMetaTags } from 'react-seo-meta-tags';

import { Router } from './components';

const App: FC = () => {
  const siteMetadata = {
    url: 'https://okvenok.by',
    title:  'Ритуальные венки оптом в Беларуси - okvenok.by',
    datePublished: '2023-01-01T00:00:00.123Z',
    description: 'Ритуальные венки оптом, корзины, композиции из искусственных цветов собственного производства по доступным ценам. Ритуальные венки оптом в Гродно. Ритуальные венки оптом в Лиде. Ритуальные венки оптом в Щучине. Ритуальные венки оптом в Волковыске. Ритуальные венки оптом в Минске.',
    language: 'ru-RU',
    image: 'https://okvenok.by/logo.png',
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
