import React from 'react';
import ModalBase from 'components/Modals/ModalBase';
import ModalStyle from 'components/Modals/modal.module.scss';

import Loading from 'components/Loading/Loading';
import TextInput from 'components/Input/TextInput';
import DatePicker from 'components/Input/DatePicker';
import FullSubmitButton from 'components/Buttons/FullSubmitButton';

export default function OrderServiceModal({ loading, showModal, closeModal, formHandle }) {
  const { serviceObj, changeValue, handleSubmit, errors } = formHandle;
  const todayDate = new Date().toISOString().substr(0, 10);

  return (
    <ModalBase show={showModal} close={closeModal}>
      <div className={ModalStyle['modal-content']}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h2>Data Pemesanan Layanan</h2>
            <div className={ModalStyle['modal-form']}>
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
                  name="phone_number"
                  type="tel"
                  label="Nomor Telepon"
                  placeholder="Nomor telepon pemesan diawali dengan +62/62/08"
                  value={serviceObj.phone_number}
                  error={errors.phone_number}
                  onChange={changeValue}
                />
                <DatePicker
                  min={todayDate}
                  name="pickup_date"
                  label="Tanggal Jemput"
                  placeholder="Tentukan tanggal penjemputan tim kami"
                  value={serviceObj.pickup_date}
                  error={errors.pickup_date}
                  onChange={changeValue}
                />
                <TextInput
                  name="pickup_time"
                  type="time"
                  label="Waktu Jemput/Pelaksanaan"
                  placeholder="Tentukan waktu penjemputan/pelaksanaan pada tanggal yang telah ditentukan"
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
                <div className={`${ModalStyle['modal-button']}`}>
                  <FullSubmitButton label="Kirim" type="primary" />
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </ModalBase>
  );
}
