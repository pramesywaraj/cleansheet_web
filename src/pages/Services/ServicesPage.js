import React from 'react';

import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';

export default function ServicesPage() {
  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <TabsContainer />
      <div>Content</div>
    </div>
  );
}
