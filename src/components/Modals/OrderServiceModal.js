import React from 'react';
import ModalBase from './ModalBase';
import ModalStyle from './modal.module.scss';
import useInput from '../../hooks/useInput';

import TextInput from '../Input/TextInput';
import FullSubmitButton from '../Buttons/FullSubmitButton';

export default function OrderServiceModal({ show, close }) {
  const [serviceObj, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      phone: '',
      pickup_date: '',
      pickup_time: '',
      notes: '',
      pickup_address: '',
    },
    onSubmit,
  );

  function onSubmit() {
    console.log(serviceObj);
    console.log('submitted');
    resetValue();
  }

  return (
    <ModalBase show={show} close={close}>
      <div className={ModalStyle['modal-service-content']}>
        <h2>Data Pemesanan Layanan</h2>
        <div className={ModalStyle['modal-service-form']}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="name"
              type="text"
              label="Nama Lengkap"
              placeholder="Nama lengkap pemesan"
              value={serviceObj.name}
              error={errors.name}
              onChange={changeValue}
            />
            <TextInput
              name="phone"
              type="tel"
              label="Nomor Telepon"
              placeholder="Nomor telepon pemesan"
              value={serviceObj.phone}
              error={errors.phone}
              onChange={changeValue}
            />
            <TextInput
              name="pickup_date"
              type="date"
              label="Tanggal Jemput"
              placeholder="Tentukan tanggal penjemputan tim kami"
              value={serviceObj.pickup_date}
              error={errors.pickup_date}
              onChange={changeValue}
            />
            <TextInput
              name="pickup_time"
              type="time"
              label="Waktu Jemput"
              placeholder="Tentukan waktu penjemputan pada tanggal yang telah ditentukan"
              value={serviceObj.pickup_time}
              error={errors.pickup_time}
              onChange={changeValue}
            />
            <TextInput
              name="notes"
              type="text"
              label="Keterangan"
              placeholder="Tulisakan keterangan (contoh: pakaian dengan berat 3-5 kg)"
              value={serviceObj.notes}
              error={errors.notes}
              onChange={changeValue}
            />
            <TextInput
              name="pickup_address"
              type="text"
              label="Alamat"
              placeholder="Tuliskan alamat lengkap Anda"
              value={serviceObj.pickup_address}
              error={errors.pickup_address}
              onChange={changeValue}
            />
            <div className={`${ModalStyle['modal-service-button']}`}>
              <FullSubmitButton label="Kirim" type="primary" />
            </div>
          </form>
        </div>
      </div>
    </ModalBase>
  );
}
