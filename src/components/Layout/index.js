import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DemoTag from 'components/Tags/DemoTag';

function Layout({ children }) {
  const [isShowDemoTag, setIsShowDemoTag] = useState(false);
  
  useEffect(() => {
    if (process.env.REACT_APP_DEMO_ONLY === 'true') setIsShowDemoTag(true);
  }, []);

  return (
    <main role="main">
      {isShowDemoTag && <DemoTag />}
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
