import React from 'react';
import ModalBase from './ModalBase';
import ModalStyle from './modal.module.scss';
import useInput from '../../hooks/useInput';

import TextInput from '../Input/TextInput';
import TextArea from '../Input/TextArea';
import FullSubmitButton from '../Buttons/FullSubmitButton';

export default function JoinPartnerModal({ show, close }) {
  const [joinObject, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      company_name: '',
      city: '',
      phone: '',
      description: '',
      address: '',
      join_reason: '',
    },
    onSubmit,
  );

  function onSubmit() {
    console.log(joinObject);
    console.log('submitted');
    resetValue();
  }

  function onCloseModal() {
    resetValue();
    close();
  }

  return (
    <ModalBase show={show} close={onCloseModal}>
      <div className={ModalStyle['modal-content']}>
        <h1 style={{ marginBottom: '1vh' }}>Bermitra Bersama Cleansheet</h1>
        <h3>Yuk isi data berikut untuk keperluan kemitraan Cleansheet</h3>
        <div className={ModalStyle['modal-form']}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="company_name"
              type="text"
              label="Nama perusahaan/komunitas/pemerintahan"
              placeholder="Nama perusahaan/komunitas/pemerintahan"
              value={joinObject.company_name}
              error={errors.company_name}
              onChange={changeValue}
            />
            <div className={ModalStyle['modal-input-row']}>
              <div className={ModalStyle['modal-input-marginRight']}>
                <TextInput
                  name="phone"
                  type="tel"
                  label="Nomor Telepon (WA)"
                  placeholder="Nomor telepon perusahaan yang dapat dihubungi dengan WA"
                  value={joinObject.phone}
                  error={errors.phone}
                  onChange={changeValue}
                />
              </div>
              <div className={ModalStyle['modal-input-marginLeft']}>
                <TextInput
                  name="city"
                  type="text"
                  label="Kota"
                  placeholder="Kota cabang utama perusahaan"
                  value={joinObject.city}
                  error={errors.city}
                  onChange={changeValue}
                />
              </div>
            </div>
            <TextArea
              name="address"
              label="Alamat"
              placeholder="Tuliskan alamat lengkap perusahaan Anda"
              value={joinObject.address}
              error={errors.address}
              onChange={changeValue}
            />
            <TextArea
              name="description"
              label="Deskripsi Perusahaan"
              placeholder="Tuliskan deskripsi perushaan Anda seperti apa"
              value={joinObject.description}
              error={errors.description}
              onChange={changeValue}
            />
            <TextArea
              name="join_reason"
              label="Alasan Bergabung"
              placeholder="Tuliskan alasan Anda mengapa Anda ingin bergabung"
              value={joinObject.join_reason}
              error={errors.join_reason}
              onChange={changeValue}
            />
            <div className={`${ModalStyle['modal-button']}`}>
              <FullSubmitButton label="Kirim" type="primary" />
            </div>
          </form>
        </div>
      </div>
    </ModalBase>
  );
}
