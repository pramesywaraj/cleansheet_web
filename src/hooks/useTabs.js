import { useState } from 'react';

export const TABTYPE = {
  sanitation: {
    code: 'SANITATION',
    name: 'Kebersihan',
  },
  wash_item: {
    code: 'WASH_ITEM',
    name: 'Cuci Barang',
  },
  environment: {
    code: 'ENVIRONMENT',
    name: 'Penanganan Lingkungan',
  },
};

export default function useTabs(selected) {
  const [activeTab, setActiveTab] = useState(selected);

  const changeActiveTab = key => {
    const isAlreadyActive = activeTab === key;
    const idSelected = !isAlreadyActive ? key : activeTab;
    setActiveTab(idSelected);
  };

  return [activeTab, changeActiveTab];
}
