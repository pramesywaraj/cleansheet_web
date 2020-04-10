import React from 'react';
import { useHistory } from 'react-router-dom';

import MainSection from './MainSection';
import ServiceSection from './ServiceSection';
import ProductSection from './ProductSection';
import ClientSection from './ClientSection';
import JoinCleansheetWorkerSection from './JoinCleansheetWorkerSection';
import JoinCleansheetPartner from './JoinCleansheetPartner';

export default function LandingPage() {
  const history = useHistory();

  const goToProductPage = () => {
    history.push('/produk');
  };

  const goToServicePage = () => {
    history.push('/layanan');
  };

  return (
    <>
      <MainSection goToProductPage={goToProductPage} />
      <ServiceSection goToServicePage={goToServicePage} />
      <ProductSection goToProductPage={goToProductPage} />
      <ClientSection />
      <JoinCleansheetWorkerSection />
      <JoinCleansheetPartner />
    </>
  );
}
