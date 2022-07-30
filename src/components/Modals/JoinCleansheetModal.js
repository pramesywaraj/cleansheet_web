import React from 'react';
import useInput from 'hooks/useInput';
import usePostData from 'hooks/usePostData';

import ModalBase from 'components/Modals/ModalBase';
import ModalStyle from 'components/Modals/modal.module.scss';
import TextInput from 'components/Input/TextInput';
import TextArea from 'components/Input/TextArea';
import BidikmisiRadioInput from 'components/Input/BidikmisiRadioInput';
import FullSubmitButton from 'components/Buttons/FullSubmitButton';

export default function JoinCleansheetModal({ show, close }) {
  const [joinObject, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      phone_number: '',
      nim: '',
      year: '',
      major: '',
      is_bidikmisi: undefined,
      address: '',
      reason: '',
    },
    onSubmit,
  );
  const { onPostLoading, onPostData } = usePostData('registrant/create');

  function successHandling() {
    resetValue();
    close();
  }

  function onSubmit() {
    onPostData(joinObject, successHandling);
  }

  return (
    <ModalBase show={show} close={close}>
      <div className={ModalStyle['modal-content']}>
        <h1 style={{ marginBottom: '1vh' }}>Bergabung Bersama Cleansheet</h1>
        <h4>Yuk isi data berikut untuk keperluan rekrutmen mitra Cleansheet</h4>
        <div className={ModalStyle['modal-form']}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="name"
              type="text"
              label="Nama Lengkap"
              placeholder="Nama lengkap pendaftar"
              value={joinObject.name}
              error={errors.name}
              onChange={changeValue}
            />
            <div className={ModalStyle['modal-input-row']}>
              <div className={ModalStyle['modal-input-marginRight']}>
                <TextInput
                  name="phone_number"
                  type="tel"
                  label="Nomor Telepon (WA)"
                  placeholder="Nomor telepon pendaftar yang terhubung dengan WA"
                  value={joinObject.phone_number}
                  error={errors.phone_number}
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
            <BidikmisiRadioInput
              name="is_bidikmisi"
              error={errors.is_bidikmisi}
              onChange={changeValue}
            />
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
              <FullSubmitButton label="Kirim" type="primary" isLoading={onPostLoading} />
            </div>
          </form>
        </div>
      </div>
    </ModalBase>
  );
}
