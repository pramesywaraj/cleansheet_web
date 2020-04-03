import React, { useState, useEffect, useRef } from 'react';
import useFetchData from '../../../hooks/useFetchData';

import PaymentModalStyle from './paymentModal.module.scss';

import ModalBase from '../ModalBase';
import PaymentItem from './PaymentItem';
import Loading from '../../Loading/Loading';

function AvailAccountSelect({ availAccounts, loading }) {
  if (loading) {
    return (
      <div className={`${PaymentModalStyle['modal-payment-flex-center']}`}>
        <Loading />
      </div>
    );
  }
  return (
    <div className={`${PaymentModalStyle['modal-payment-container']}`}>
      <div className={PaymentModalStyle['modal-payment-sub']}>
        <p>Anda dapat melakukan pembayaran melalui: </p>
      </div>
      <div className={`${PaymentModalStyle['modal-payment-list']}`}>
        {availAccounts.length > 0 ? (
          availAccounts.map(item => (
            <PaymentItem
              key={item.id}
              name={item.name}
              image={item.image_url}
              description={item.description}
            />
          ))
        ) : (
          <div className={`${PaymentModalStyle['modal-payment-flex-center']}`}>
            <p>Tidak ada akun pembayaran yang tersedia.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function PaymentDetail() {
  return (
    <div className={PaymentModalStyle['payment-detail-container']}>
      <div>
        <p>Silahkan transfer pembayaran ke nomor dibawah ini:</p>
      </div>
      <div />
      <div />
    </div>
  );
}

export default function PaymentAccountModal({ show, close }) {
  const { loading, response } = useFetchData('master/payments/');
  const [availAccounts, setAvailAccounts] = useState([]);
  const [selected, setSelected] = useState({});
  const ref = useRef({});

  function selectPaymentAccount(obj) {
    setSelected(obj);
  }

  useEffect(() => {
    if (ref.current.rendered) {
      setAvailAccounts(response.data);
    } else {
      ref.current.rendered = true;
    }
  }, [response]);

  return (
    <ModalBase show={show} close={close} title="Pembayaran">
      {!selected ? (
        <PaymentDetail />
      ) : (
        <AvailAccountSelect loading={loading} availAccounts={availAccounts} />
      )}
    </ModalBase>
  );
}
