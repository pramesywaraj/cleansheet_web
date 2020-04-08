import React, { useEffect, useState } from 'react';

import useTabs, { TRANSACTIONTAB } from '../../hooks/useTabs';
import useModal from '../../hooks/useModal';
import useFetchUserTransactions from '../../hooks/useFetchUserTransactions';

import { setCommaToMoney, parseStatus } from '../../misc/otherFunctionality';

import TransactionStyle from './transaction.module.scss';

import TabsContainer from '../../components/Tabs/TabsContainer';
import PaymentAccountModal from '../../components/Modals/PaymentAccount/PaymentAccountModal';
import TransactionDetailModal from '../../components/Modals/Transaction/TransactionDetailModal';
import Table from '../../components/Table/Table';
import TextButton from '../../components/Buttons/TextButton';

export default function TransactionPage() {
  const [activeTab, onChangeTab] = useTabs(TRANSACTIONTAB.product.code);
  const { loading, response, changeCode } = useFetchUserTransactions(TRANSACTIONTAB.product.code);

  const [showPaymentModal, openPaymentModal, closePaymentModal] = useModal();
  const [showTransDetail, openTransDetailModal, closeTransDetailModal] = useModal();

  const [data, setData] = useState([]);
  const [selectedElement, setSelectedElement] = useState({});

  const tableHeader = ['Tanggal Pemesanan', 'Kode Pesanan', 'Total Harga', 'Status Pemesanan', ' '];

  useEffect(() => {
    setData(response.data);
  }, [response]);

  function handleTabChange(key) {
    if (activeTab === key) return;
    onChangeTab(key);
    changeCode(key);
  }

  function handleOpenTransDetailModal(selected) {
    openTransDetailModal();
    setSelectedElement(selected);
  }

  function handleCloseTransDetailModal() {
    closeTransDetailModal();
    setSelectedElement({});
  }

  function renderTableData(elements) {
    return elements.map(element => {
      let price;
      if (element.total) {
        price = element.total;
      } else if (element.detail.price !== undefined || element.detail.price) {
        price = element.detail.price;
      } else {
        price = '-';
      }

      return (
        <tr key={element.id}>
          <td>{element.order_date}</td>
          <td>{element.order_ref}</td>
          <td>{`Rp. ${setCommaToMoney(price)}`}</td>
          <td>{parseStatus(element.status)}</td>
          <td>
            <TextButton action={() => handleOpenTransDetailModal(element)}>Lihat Detail</TextButton>
          </td>
        </tr>
      );
    });
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
        <Table loading={loading} headers={tableHeader}>
          {data ? renderTableData(data) : ''}
        </Table>
      </div>
      {showPaymentModal && (
        <PaymentAccountModal show={showPaymentModal} close={closePaymentModal} />
      )}
      {showTransDetail && (
        <TransactionDetailModal
          data={selectedElement}
          show={showTransDetail}
          close={handleCloseTransDetailModal}
          title={`Detil Pesanan ${selectedElement.order_ref}`}
        />
      )}
    </div>
  );
}
