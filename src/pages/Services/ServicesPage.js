import React, { useEffect, useRef, useState } from 'react';
import useModal from 'hooks/useModal';
import useTabs, { TABTYPE } from 'hooks/useTabs';
import useFetchData from 'hooks/useFetchData';
import useInput from 'hooks/useInput';
import usePostData from 'hooks/usePostData';

import TabsContainer from 'components/Tabs/TabsContainer';
import OrderServiceModal from 'components/Modals/OrderServiceModal';
import ServiceList from 'pages/Services/ServiceList';

import ServicesPageStyle from 'pages/Services/servicesPage.module.scss';

export default function ServicesPage() {
  const [activeTab, onChangeTab] = useTabs(TABTYPE.sanitation.code);
  const { loading, response, paginate, nextHandler, prevHandler, fetchByCategory } = useFetchData(
    `master/services/get-by-category`,
    true,
    activeTab,
  );
  const { onPostLoading, onPostData } = usePostData('order/service');

  const [serviceObj, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      phone_number: '',
      pickup_date: '',
      pickup_time: '',
      notes: '',
      pickup_address: '',
    },
    orderService,
  );

  const [selectedId, setSelectedId] = useState('');
  const [showModal, openModalHandler, closeModalHandler] = useModal();
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

  function openModal(id) {
    setSelectedId(id);
    openModalHandler();
  }

  function onCloseModal() {
    resetValue();
    setSelectedId('');
    closeModalHandler();
  }

  function orderService() {
    const payload = serviceObj;
    payload.service_id = selectedId;

    onPostData(payload, onCloseModal);
  }

  return (
    <div className={ServicesPageStyle['services-wrapper']}>
      <OrderServiceModal
        loading={onPostLoading}
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
