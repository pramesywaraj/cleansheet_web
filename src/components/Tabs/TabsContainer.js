import React from 'react';

import TabsStyle from './tabs.module.scss';
import Tab from './Tab';

import useTabs from '../../hooks/useTabs';

export default function TabsContainer() {
  // const [tabs, onChangeTab] = useTabs([
  //   { id: 'cleaning', name: 'Kebersihan', isActive: true },
  //   { id: 'washing', name: 'Cuci Barang', isActive: false },
  //   { id: 'environtment', name: 'Penanganan Lingkungan', isActive: false },
  // ]);

  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        {/* {tabs.map(tab => (
          <Tab
            key={tab.id}
            label={tab.name}
            isActive={tab.isActive}
            onSelect={() => onChangeTab(tab.id)}
          />
        ))} */}
      </div>
    </div>
  );
}
