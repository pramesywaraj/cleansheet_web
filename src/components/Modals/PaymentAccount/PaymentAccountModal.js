import React from 'react';

import ModalBase from '../ModalBase';
import PaymentModalStyle from './paymentModal.module.scss';

import PaymentItem from './PaymentItem';

export default function PaymentAccountModal({ show, close }) {
  return (
    <ModalBase show close={close} title="Pembayaran">
      <div className={`${PaymentModalStyle['modal-payment-container']}`}>
        <div className={PaymentModalStyle['modal-payment-sub']}>
          <p>Anda dapat melakukan pembayaran melalui: </p>
        </div>
        <div className={`${PaymentModalStyle['modal-payment-list']}`}>
          <PaymentItem />
        </div>
      </div>
    </ModalBase>
  );
}
