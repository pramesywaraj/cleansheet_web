import React from 'react';

import TabsStyle from './tabs.module.scss';
import Tab from './Tab';

import { TABTYPE } from '../../hooks/useTabs';

export default function TabsContainer({ handleTabChange, activeTab }) {
  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        {Object.keys(TABTYPE).map((key, index) => (
          <Tab
            key={`${TABTYPE[key].code}-tab`}
            label={TABTYPE[key].name}
            selected={TABTYPE[key].code === activeTab}
            onSelect={() => handleTabChange(TABTYPE[key].code)}
          />
        ))}
      </div>
    </div>
  );
}
