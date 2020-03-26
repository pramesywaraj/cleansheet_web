import React, { useState } from 'react';
import useModal from '../../hooks/useModal';
import useFetchData from '../../hooks/useFetchData';
import ServiceCard from '../../components/Cards/ServiceCard';

import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';
import ServiceList from './ServiceList';
import OrderServiceModal from '../../components/Modals/OrderServiceModal';
import PaginationButton from '../../components/Navigation/PaginationButton';

const Cleaning = ({ onClickService }) => {
  return (
    <>
      <div className={ServicesPageStyle['services-container']}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <PaginationButton />
    </>
  );
};

const Washing = () => {
  return (
    <>
      <div className={ServicesPageStyle['services-container']}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <PaginationButton />
    </>
  );
};

const EnvirontmentClean = () => {
  return (
    <>
      <div className={ServicesPageStyle['services-container']}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <PaginationButton />
    </>
  );
};

export default function ServicesPage() {
  const { loading, response, paginate, nextHandler, prevHandler } = useFetchData(
    'master/services/get-by-category?category=SANITATION',
  );
  const [activePanel, setActivePanel] = useState(0);
  const { showModal, openModalHandler, closeModalHandler } = useModal();
  // const [openSnackbar] = useSnackbar();

  const changeActivePanel = id => {
    if (activePanel === id) return;
    setActivePanel(id);
  };

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <OrderServiceModal show={showModal} close={closeModalHandler} />
      <div className={ServicesPageStyle['services-title']}>
        <h1>Layanan Kebersihan</h1>
      </div>
      <TabsContainer changeActivePanel={changeActivePanel} />
      {/* {activePanel === 0 && <Cleaning onClickService={openModalHandler} />}
      {activePanel === 1 && <Washing />}
      {activePanel === 2 && <EnvirontmentClean />} */}
      <ServiceList
        services={response.data.services}
        loading={loading}
        pagination={{ paginate, nextHandler, prevHandler }}
        error={response.error}
      />
    </div>
  );
}
