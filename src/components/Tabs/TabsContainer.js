import React from 'react';

import TabsStyle from './tabs.module.scss';
import Tab from './Tab';

import useTabs from '../../hooks/useTabs';

export default function TabsContainer({ changeActivePanel }) {
  const [tabs, activeTab, onChangeTab] = useTabs(0);

  const handleTabChange = id => {
    onChangeTab(id);
    changeActivePanel(id);
  };

  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        {tabs.map(tab => (
          <Tab
            key={`${tab.id}-tab`}
            label={tab.name}
            selected={tab.id === activeTab}
            onSelect={() => handleTabChange(tab.id)}
          />
        ))}
      </div>
    </div>
  );
}
