import React from 'react';

import TabsStyle from './tabs.module.scss';

export default function TabsContainer() {
  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        <div className={`${TabsStyle['tab-normal']}`}>Kebersihan</div>
        <div className={`${TabsStyle['tab-normal']} ${TabsStyle['tab-active']}`}>Cuci Barang</div>
        <div className={`${TabsStyle['tab-normal']} `}>Penanganan Linkungan</div>
      </div>
    </div>
  );
}
