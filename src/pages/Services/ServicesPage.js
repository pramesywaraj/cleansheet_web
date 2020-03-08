import React, { useState } from 'react';

import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';
import Loading from '../../components/Loading/Loading';
import ServiceCard from '../../components/Cards/ServiceCard';

export default function ServicesPage() {
  const [activePanel, setActivePanel] = useState(0);

  const changeActivePanel = id => {
    if (activePanel === id) return;
    setActivePanel(id);
    console.log(activePanel);
  };

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <TabsContainer changeActivePanel={changeActivePanel} />
      <div className={ServicesPageStyle['services-container']}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
