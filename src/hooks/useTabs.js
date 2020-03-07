import { useState } from 'react';

export default function useTabs(selected) {
  const [activeTab, setActiveTab] = useState(selected);
  const tab = [
    { id: 0, name: 'Kebersihan' },
    { id: 1, name: 'Cuci Barang' },
    { id: 2, name: 'Penanganan Lingkungan' },
  ];

  const changeActiveTab = id => {
    const isAlreadyActive = activeTab === id;
    const idSelected = !isAlreadyActive ? id : activeTab;
    setActiveTab(idSelected);
  };

  return [tab, activeTab, changeActiveTab];
}
