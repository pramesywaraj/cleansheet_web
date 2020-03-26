import React, { useEffect, useRef } from 'react';
import useModal from '../../hooks/useModal';
import useTabs, { TABTYPE } from '../../hooks/useTabs';
import useFetchData from '../../hooks/useFetchData';

import ServicesPageStyle from './servicesPage.module.scss';
import TabsContainer from '../../components/Tabs/TabsContainer';
import ServiceList from './ServiceList';
import OrderServiceModal from '../../components/Modals/OrderServiceModal';

export default function ServicesPage() {
  const [activeTab, onChangeTab] = useTabs(TABTYPE.sanitation.code);
  const { loading, response, paginate, nextHandler, prevHandler, fetchByCategory } = useFetchData(
    `master/services/get-by-category`,
    true,
    activeTab,
  );
  const { showModal, openModalHandler, closeModalHandler } = useModal();
  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    } else {
      fetchByCategory(activeTab);
    }
  }, [activeTab]);

  const handleTabChange = key => {
    if (activeTab === key) return;
    onChangeTab(key);
  };

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <OrderServiceModal show={showModal} close={closeModalHandler} />
      <div className={ServicesPageStyle['services-title']}>
        <h1>Layanan Kebersihan</h1>
      </div>
      <TabsContainer handleTabChange={handleTabChange} activeTab={activeTab} />
      <ServiceList
        openServiceModal={openModalHandler}
        services={response.data.services}
        loading={loading}
        pagination={{ paginate, nextHandler, prevHandler }}
        error={response.error}
      />
    </div>
  );
}
