import React from 'react';

import TabsStyle from './tabs.module.scss';
import Tab from './Tab';

import useTabs from '../../hooks/useTabs';

export default function TabsContainer() {
  const [tabs, activeTab, onChangeTab] = useTabs(0);

  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        {tabs.map(tab => (
          <Tab
            key={`${tab.id}-tab`}
            label={tab.name}
            selected={tab.id === activeTab}
            onSelect={() => onChangeTab(tab.id)}
          />
        ))}
      </div>
    </div>
  );
}
