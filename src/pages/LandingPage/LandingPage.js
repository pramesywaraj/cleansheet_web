import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

import MainSection from './MainSection';
import ServiceSection from './ServiceSection';
import ProductSection from './ProductSection';
import ClientSection from './ClientSection';
import JoinCleansheetWorkerSection from './JoinCleansheetWorkerSection';
import JoinCleansheetPartner from './JoinCleansheetPartner';

export default function LandingPage() {
  const history = useNavigate();
  const { loading, response } = useFetchData('master/products?item_per_page=4');
  const [products, setProducts] = useState([]);

  const goToProductPage = () => {
    history.push('/produk');
  };

  const goToServicePage = () => {
    history.push('/layanan');
  };

  useEffect(() => {
    setProducts(response.data.products);
  }, [response]);

  return (
    <>
      <MainSection goToProductPage={goToProductPage} />
      <ServiceSection goToServicePage={goToServicePage} />
      <ProductSection goToProductPage={goToProductPage} loading={loading} products={products} />
      <ClientSection />
      <JoinCleansheetWorkerSection />
      <JoinCleansheetPartner />
    </>
  );
}
