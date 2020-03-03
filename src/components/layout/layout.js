import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import layoutStyle from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <main role="main">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
