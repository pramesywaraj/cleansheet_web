import React from 'react';

import ServicesPageStyle from './servicesPage.module.scss';

export default function ServicesPage() {
  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <div>Header</div>
      <div>Content</div>
    </div>
  );
}
