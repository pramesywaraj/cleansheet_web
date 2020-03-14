import React from 'react';
import ModalBase from './ModalBase';
import ModalStyle from './modal.module.scss';
import useInput from '../../hooks/useInput';

import TextInput from '../Input/TextInput';
import TextArea from '../Input/TextArea';
import FullSubmitButton from '../Buttons/FullSubmitButton';

export default function JoinCleansheetModal({ show, close }) {
  const [joinObject, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      phone: '',
      nim: '',
      year: '',
      major: '',
      bidikmisi: true,
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
        <h1 style={{ marginBottom: '1vh' }}>Bergabung Bersama Cleansheet</h1>
        <h3>Yuk isi data berikut untuk keperluan rekrutmen staf Cleansheet</h3>
        <div className={ModalStyle['modal-form']}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="name"
              type="text"
              label="Nama Lengkap"
              placeholder="Nama lengkap pemesan"
              value={joinObject.name}
              error={errors.name}
              onChange={changeValue}
            />
            <div className={ModalStyle['modal-input-row']}>
              <div className={ModalStyle['modal-input-marginRight']}>
                <TextInput
                  name="phone"
                  type="tel"
                  label="Nomor Telepon"
                  placeholder="Nomor telepon pemesan"
                  value={joinObject.phone}
                  error={errors.phone}
                  onChange={changeValue}
                />
              </div>
              <div className={ModalStyle['modal-input-marginLeft']}>
                <TextInput
                  name="nim"
                  type="text"
                  label="NIM"
                  placeholder="contoh: G64150000"
                  value={joinObject.nim}
                  error={errors.nim}
                  onChange={changeValue}
                />
              </div>
            </div>
            <div className={ModalStyle['modal-input-row']}>
              <div className={ModalStyle['modal-input-marginRight']}>
                <TextInput
                  name="year"
                  type="number"
                  label="Tahun Angkatan"
                  placeholder="contoh: 2015"
                  value={joinObject.year}
                  error={errors.year}
                  onChange={changeValue}
                />
              </div>
              <div className={ModalStyle['modal-input-marginLeft']}>
                <TextInput
                  name="major"
                  type="text"
                  label="Jurusan"
                  placeholder="contoh: Ilmu Komputer"
                  value={joinObject.major}
                  error={errors.major}
                  onChange={changeValue}
                />
              </div>
            </div>

            <TextInput
              name="address"
              type="text"
              label="Alamat"
              placeholder="Tuliskan alamat lengkap Anda"
              value={joinObject.address}
              error={errors.address}
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
