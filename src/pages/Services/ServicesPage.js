import React, { useEffect, useRef, useState } from 'react';
import useModal from '../../hooks/useModal';
import useTabs, { TABTYPE } from '../../hooks/useTabs';
import useFetchData from '../../hooks/useFetchData';
import useInput from '../../hooks/useInput';

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
  const [serviceObj, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      phone: '',
      pickup_date: '',
      pickup_time: '',
      notes: '',
      pickup_address: '',
    },
    orderService,
  );

  const [selectedId, setSelectedId] = useState('');
  const { showModal, openModalHandler, closeModalHandler } = useModal();
  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    } else {
      fetchByCategory(activeTab);
    }
  }, [activeTab]);

  function handleTabChange(key) {
    if (activeTab === key) return;
    onChangeTab(key);
  }

  function orderService() {
    resetValue();
  }

  function openModal(id) {
    setSelectedId(id);
    openModalHandler();
  }

  function onCloseModal() {
    resetValue();
    setSelectedId('');
    closeModalHandler();
  }

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <OrderServiceModal
        showModal={showModal}
        closeModal={onCloseModal}
        formHandle={{ serviceObj, changeValue, handleSubmit, errors }}
      />
      <div className={ServicesPageStyle['services-title']}>
        <h1>Layanan Kebersihan</h1>
      </div>
      <TabsContainer handleTabChange={handleTabChange} activeTab={activeTab} />
      <ServiceList
        openServiceModal={openModal}
        services={response.data.services}
        loading={loading}
        pagination={{ paginate, nextHandler, prevHandler }}
        error={response.error}
      />
    </div>
  );
}
