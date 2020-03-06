import React from 'react';

import TabsStyle from './tabs.module.scss';

export default function TabsContainer() {
  return (
    <div className={TabsStyle['tabs-container']}>
      <div className={TabsStyle['tabs-content']}>
        <div>Kebersihan</div>
        <div>Cuci Barang</div>
        <div>Penanganan Linkungan</div>
      </div>
    </div>
  );
}
