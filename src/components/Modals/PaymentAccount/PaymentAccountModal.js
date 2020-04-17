import React, { useState, useEffect, useRef } from 'react';
import useFetchData from '../../../hooks/useFetchData';

import PaymentModalStyle from './paymentModal.module.scss';

import ModalBase from '../ModalBase';
import Image from '../../Image/Image';
import PaymentItem from './PaymentItem';
import Loading from '../../Loading/Loading';

function AvailAccountSelect({ availAccounts, loading, selectAnAccount }) {
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
              onSelect={() => selectAnAccount(item)}
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
      <div style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '1vh' }}>
        <p>Daftar akun pembayaran tersedia juga pada halaman Transaksi. </p>
      </div>
    </div>
  );
}

function PaymentDetail({ paymentAccount }) {
  return (
    <div className={PaymentModalStyle['payment-detail-container']}>
      <div>
        <p>Silahkan transfer pembayaran ke nomor dibawah ini:</p>
      </div>
      <div className={PaymentModalStyle['payment-detail-account']}>
        <div className={PaymentModalStyle['payment-detail-logo']}>
          <div className={PaymentModalStyle['payment-item-logo_container']}>
            <Image src={paymentAccount.image_url} alt="Logo Bank" />
          </div>
          <p>{paymentAccount.name}</p>
        </div>
        <div className={PaymentModalStyle['account-name_number']}>
          <p>{paymentAccount.account_number}</p>
          <p>{`atas nama ${paymentAccount.account_name}`}</p>
        </div>
      </div>
      <div className={PaymentModalStyle['payment-detail-contact']}>
        <p>
          Apabila telah melakukan pembayaran, silahkan hubungi kontak layanan kami dibawah ini agar
          pesanan Anda dapat diproses.
        </p>
        <p>082839299299</p>
      </div>
    </div>
  );
}

export default function PaymentAccountModal({ show, close }) {
  const { loading, response } = useFetchData('master/payments/');
  const [availAccounts, setAvailAccounts] = useState([]);
  const [selected, setSelected] = useState(null);
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
      {selected ? (
        <PaymentDetail paymentAccount={selected} />
      ) : (
        <AvailAccountSelect
          loading={loading}
          availAccounts={availAccounts}
          selectAnAccount={selectPaymentAccount}
        />
      )}
    </ModalBase>
  );
}
