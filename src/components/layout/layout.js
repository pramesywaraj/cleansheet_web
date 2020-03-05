import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import LayoutStyle from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <main role="main">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
