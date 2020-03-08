import React, { useState } from 'react';

import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';
import Loading from '../../components/Loading/Loading';
import ServiceCard from '../../components/Cards/ServiceCard';

const Cleaning = () => {
  return (
    <div className={ServicesPageStyle['services-container']}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

const Washing = () => {
  return (
    <div className={ServicesPageStyle['services-container']}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

const EnvirontmentClean = () => {
  return (
    <div className={ServicesPageStyle['services-container']}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default function ServicesPage() {
  const [activePanel, setActivePanel] = useState(0);

  const changeActivePanel = id => {
    if (activePanel === id) return;
    setActivePanel(id);
  };

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <div className={ServicesPageStyle['services-title']}>
        <h1>Layanan Kebersihan</h1>
      </div>
      <TabsContainer changeActivePanel={changeActivePanel} />
      {activePanel === 0 && <Cleaning />}
      {activePanel === 1 && <Washing />}
      {activePanel === 2 && <EnvirontmentClean />}
    </div>
  );
}
