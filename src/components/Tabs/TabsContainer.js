import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import TabsStyle from './tabs.module.scss';
import Tab from './Tab';

import { TABTYPE, TRANSACTIONTAB } from '../../hooks/useTabs';

export default function TabsContainer({ handleTabChange, activeTab }) {
  const [tabObj, setTab] = useState({});
  const { pathname } = useLocation();

  function checkPathname() {
    switch (pathname) {
      case '/layanan':
        setTab(TABTYPE);
        break;
      case '/transaksi':
        setTab(TRANSACTIONTAB);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    checkPathname();
  }, []);

  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        {Object.keys(tabObj).map((key) => (
          <Tab
            key={`${tabObj[key].code}-tab`}
            label={tabObj[key].name}
            selected={tabObj[key].code === activeTab}
            onSelect={() => handleTabChange(tabObj[key].code)}
          />
        ))}
      </div>
    </div>
  );
}
