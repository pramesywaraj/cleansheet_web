import React from 'react';

import useTabs, { TRANSACTIONTAB } from '../../hooks/useTabs';
import useModal from '../../hooks/useModal';

import TransactionStyle from './transaction.module.scss';

import TabsContainer from '../../components/Tabs/TabsContainer';
import PaymentAccountModal from '../../components/Modals/PaymentAccount/PaymentAccountModal';
import Table from '../../components/Table/Table';

export default function TransactionPage() {
  const [activeTab, onChangeTab] = useTabs(TRANSACTIONTAB.service.code);
  const [showPaymentModal, openPaymentModal, closePaymentModal] = useModal();

  function handleTabChange(key) {
    if (activeTab === key) return;
    onChangeTab(key);
  }

  return (
    <div className={TransactionStyle['transaction-container']}>
      <TabsContainer handleTabChange={handleTabChange} activeTab={activeTab} />
      <div className={TransactionStyle['transaction-content-container']}>
        <div className={TransactionStyle['transaction-payment-available']}>
          <p>
            {`Nomor rekening tujuan pembayaran `}
            <button onClick={openPaymentModal} type="button">
              disini
            </button>
          </p>
        </div>
        <Table />
      </div>
      {showPaymentModal && (
        <PaymentAccountModal show={showPaymentModal} close={closePaymentModal} />
      )}
    </div>
  );
}
