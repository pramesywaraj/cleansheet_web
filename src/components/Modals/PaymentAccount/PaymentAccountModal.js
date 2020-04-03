import React from 'react';

import ModalBase from '../ModalBase';
import PaymentModalStyle from './paymentModal.module.scss';

export default function PaymentAccountModal({ show, close }) {
  return (
    <ModalBase show={show} close={close} title="Pembayaran">
      <div className={`${PaymentModalStyle['modal-payment-container']}`}>
        <p>Wkwkwkkw</p>
      </div>
    </ModalBase>
  );
}
