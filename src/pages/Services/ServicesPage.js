import React from 'react';

import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';
import Loading from '../../components/Loading/Loading';

export default function ServicesPage() {
  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <TabsContainer />
      <Loading />
    </div>
  );
}
