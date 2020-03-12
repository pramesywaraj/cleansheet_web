import React, { useState } from 'react';
import useModal from '../../hooks/useModal';
import useSnackbar from '../../hooks/useSnackbar';
import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';
import Loading from '../../components/Loading/Loading';
import ServiceCard from '../../components/Cards/ServiceCard';
import OrderServiceModal from '../../components/Modals/OrderServiceModal';
import Snackbar from '../../components/Snackbars/Snackbar';

const Cleaning = ({ onClickService }) => {
  return (
    <div className={ServicesPageStyle['services-container']}>
      <ServiceCard onClick={onClickService} />
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
  const { showModal, openModalHandler, closeModalHandler } = useModal();
  const [showSnackbar, message, openSnackbar] = useSnackbar();

  const changeActivePanel = id => {
    if (activePanel === id) return;
    setActivePanel(id);
    openSnackbar('Test aja slur');
  };

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <OrderServiceModal show={showModal} close={closeModalHandler} />
      <Snackbar isShow={showSnackbar} message={message} />
      <div className={ServicesPageStyle['services-title']}>
        <h1>Layanan Kebersihan</h1>
      </div>
      <TabsContainer changeActivePanel={changeActivePanel} />
      {activePanel === 0 && <Cleaning onClickService={openModalHandler} />}
      {activePanel === 1 && <Washing />}
      {activePanel === 2 && <EnvirontmentClean />}
    </div>
  );
}
