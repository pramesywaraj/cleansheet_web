import React, { useEffect } from 'react';

import useTabs, { TRANSACTIONTAB } from '../../hooks/useTabs';
import useModal from '../../hooks/useModal';

import TransactionStyle from './transaction.module.scss';

import TabsContainer from '../../components/Tabs/TabsContainer';
import PaymentAccountModal from '../../components/Modals/PaymentAccount/PaymentAccountModal';
import TransactionDetailModal from '../../components/Modals/Transaction/TransactionDetailModal';
import Table from '../../components/Table/Table';
import TextButton from '../../components/Buttons/TextButton';

export default function TransactionPage() {
  const [activeTab, onChangeTab] = useTabs(TRANSACTIONTAB.service.code);
  const [showPaymentModal, openPaymentModal, closePaymentModal] = useModal();
  const [showTransDetail, openTransDetail, closeTransDetail] = useModal();

  const tableHeader = ['Tanggal Pemesanan', 'Kode Pesanan', 'Total Harga', 'Status Pemesanan', ' '];

  function renderTableData() {
    return (
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>Germany</td>
        <td>
          <TextButton action={openTransDetail}>Lihat Detail</TextButton>
        </td>
      </tr>
    );
  }

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
            <TextButton action={openPaymentModal}>disini</TextButton>
          </p>
        </div>
        <Table headers={tableHeader}>{renderTableData()}</Table>
      </div>
      {showPaymentModal && (
        <PaymentAccountModal show={showPaymentModal} close={closePaymentModal} />
      )}
      {showTransDetail && (
        <TransactionDetailModal
          show={showTransDetail}
          close={closeTransDetail}
          title={`Detil Pesanan `}
        />
      )}
    </div>
  );
}
