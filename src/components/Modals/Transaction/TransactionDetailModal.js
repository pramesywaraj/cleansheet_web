/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { parseStatus, setCommaToMoney } from '../../../misc/otherFunctionality';
import TransactionModalStyle from './transactionModal.module.scss';
import ModalBase from '../ModalBase';

export default function TransactionDetailModal({ data, show, close, selectedTab }) {
  const { order_ref, order_date, status, detail } = data;
  const [detailData, setDetail] = useState([]);

  useEffect(() => {
    if (Array.isArray(detail)) {
      setDetail(detail);
    } else {
      const tempArray = [];
      tempArray.push(detail);
      setDetail(tempArray);
    }
  }, []);

  const renderTransactionDetail = () => (
    <div className={TransactionModalStyle['modal-transaction-detail']}>
      <div className={TransactionModalStyle['transaction-detail-value']}>
        <div>
          <p>Tanggal Pemesananan </p>
          <p>:</p>
          <p>{moment(order_date).format('LL')}</p>
        </div>
        <div>
          <p>Status Pemesananan </p>
          <p>:</p>
          {parseStatus(status)}
        </div>
        <div>
          <p>Batas Pembayaran </p>
          <p>:</p>
          <p>
            {moment(order_date)
              .add(1, 'days')
              .format('LL')}
          </p>
        </div>
      </div>
    </div>
  );

  const renderProductItem = () => {
    return (
      <div className={TransactionModalStyle['transaction-products-list']}>
        {selectedTab === 'product' &&
          detailData.map((item, index) => (
            <div key={index.toString()} className={TransactionModalStyle['product-item']}>
              <p>{index + 1}</p>
              <p>{item.name}</p>
              <p>{`x ${item.amount}`}</p>
            </div>
          ))}

        {selectedTab === 'service' &&
          detailData.map((item, index) => (
            <div key={index.toString()} className={TransactionModalStyle['product-item']}>
              <p>{index + 1}</p>
              <p>{item.title}</p>
              <p>x 1</p>
            </div>
          ))}

        {detailData.length === 0 && <p>Tidak ada barang/layanan.</p>}
      </div>
    );
  };

  const totalPrice = () => {
    let total;
    if (selectedTab === 'product') {
      total = detailData.reduce((acc, item) => acc + parseInt(item.amount * item.price, 10), 0);
    } else {
      total = detailData.reduce((acc, item) => acc + parseInt(item.price, 10), 0);
    }

    return setCommaToMoney(total);
  };

  return (
    <ModalBase show={show} close={close} title={`Detil Pesanan ${order_ref}`}>
      <div className={TransactionModalStyle['modal-transaction-container']}>
        <div className={TransactionModalStyle['modal-transaction-total_charge']}>
          <p>Total yang harus dibayar</p>
          <p>{`Rp. ${totalPrice()}`}</p>
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
