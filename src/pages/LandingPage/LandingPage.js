import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from 'hooks/useFetchData';

import MainSection from 'pages/LandingPage/MainSection';
import ServiceSection from 'pages/LandingPage/ServiceSection';
import ProductSection from 'pages/LandingPage/ProductSection';
import ClientSection from 'pages/LandingPage/ClientSection';
import JoinCleansheetWorkerSection from 'pages/LandingPage/JoinCleansheetWorkerSection';
import JoinCleansheetPartner from 'pages/LandingPage/JoinCleansheetPartner';

export default function LandingPage() {
  const navigate = useNavigate();
  const { loading, response } = useFetchData('master/products?item_per_page=4');
  const [products, setProducts] = useState([]);

  const goToProductPage = () => {
    navigate('/produk');
  };

  const goToServicePage = () => {
    navigate('/layanan');
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
