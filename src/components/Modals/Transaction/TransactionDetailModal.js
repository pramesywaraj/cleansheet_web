import React from 'react';

import TransactionModalStyle from './transactionModal.module.scss';

import ModalBase from '../ModalBase';

export default function TransactionDetailModal({ data, show, close, title }) {
  const renderTransactionDetail = () => (
    <div className={TransactionModalStyle['modal-transaction-detail']}>
      <div className={TransactionModalStyle['transaction-detail-value']}>
        <div>
          <p>Tanggal Pemesananan </p>
          <p>:</p>
          <p>6 Desember 2019</p>
        </div>
        <div>
          <p>Status Pemesananan </p>
          <p>:</p>
          <p>Belum dibayar</p>
        </div>
        <div>
          <p>Batas Pembayaran </p>
          <p>:</p>
          <p>7 Desember 2019</p>
        </div>
      </div>
    </div>
  );

  const renderProductItem = () => (
    <div className={TransactionModalStyle['transaction-products-list']}>
      <div className={TransactionModalStyle['product-item']}>
        <p>1</p>
        <p>Ijuk</p>
        <p>x 2</p>
      </div>
      <div className={TransactionModalStyle['product-item']}>
        <p>1</p>
        <p>Ijuk</p>
        <p>x 2</p>
      </div>
      <div className={TransactionModalStyle['product-item']}>
        <p>1</p>
        <p>Ijuk</p>
        <p>x 2</p>
      </div>
    </div>
  );

  return (
    <ModalBase show={show} close={close} title={title}>
      <div className={TransactionModalStyle['modal-transaction-container']}>
        <div className={TransactionModalStyle['modal-transaction-total_charge']}>
          <p>Total yang harus dibayar</p>
          <p>Rp. 300.000, -</p>
        </div>
        {renderTransactionDetail()}
        <div className={TransactionModalStyle['modal-transaction-products_container']}>
          <p>Yang dipesan :</p>
          {renderProductItem()}
        </div>
      </div>
    </ModalBase>
  );
}
