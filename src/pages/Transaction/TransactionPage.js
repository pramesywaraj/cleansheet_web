import React from 'react';

import useTabs, { TRANSACTIONTAB } from '../../hooks/useTabs';
import useModal from '../../hooks/useModal';

import TransactionStyle from './transaction.module.scss';

import TabsContainer from '../../components/Tabs/TabsContainer';
import PaymentAccountModal from '../../components/Modals/PaymentAccount/PaymentAccountModal';
import Table from '../../components/Table/Table';
import TextButton from '../../components/Buttons/TextButton';

export default function TransactionPage() {
  const [activeTab, onChangeTab] = useTabs(TRANSACTIONTAB.service.code);
  const [showPaymentModal, openPaymentModal, closePaymentModal] = useModal();

  const tableHeader = ['Tanggal Pemesanan', 'Kode Pesanan', 'Total Harga', 'Status Pemesanan', ' '];

  function handleTabChange(key) {
    if (activeTab === key) return;
    onChangeTab(key);
  }

  function openModal() {
    console.log('opene');
  }

  return (
    <div className={TransactionStyle['transaction-container']}>
      <TabsContainer handleTabChange={handleTabChange} activeTab={activeTab} />
      <div className={TransactionStyle['transaction-content-container']}>
        <div className={TransactionStyle['transaction-payment-available']}>
          <p>
            {`Nomor rekening tujuan pembayaran `}
            <TextButton action={openPaymentModal}>disini</TextButton>
          </p>
        </div>
        <Table headers={tableHeader}>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>
              <TextButton action={openModal}>Lihat Detail</TextButton>
            </td>
          </tr>
        </Table>
      </div>
      {showPaymentModal && (
        <PaymentAccountModal show={showPaymentModal} close={closePaymentModal} />
      )}
    </div>
  );
}
