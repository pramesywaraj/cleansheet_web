import React from 'react';

import TransactionModalStyle from './transactionModal.module.scss';

import ModalBase from '../ModalBase';

export default function TransactionDetailModal({ data, show, close, title }) {
  return (
    <ModalBase show={show} close={close} title={title}>
      <div className={TransactionModalStyle['modal-transaction-container']}>
        <div />
        <div />
        <div />
      </div>
    </ModalBase>
  );
}
