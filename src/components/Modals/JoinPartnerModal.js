import React from 'react';

import useInput from 'hooks/useInput';
import usePostData from 'hooks/usePostData';

import ModalBase from 'components/Modals/ModalBase';
import ModalStyle from 'components/Modals/modal.module.scss';

import TextInput from 'components/Input/TextInput';
import TextArea from 'components/Input/TextArea';
import FullSubmitButton from 'components/Buttons/FullSubmitButton';

export default function JoinPartnerModal({ show, close }) {
  const [joinObject, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      company_name: '',
      city: '',
      phone_number: '',
      description: '',
      address: '',
      join_reason: '',
    },
    onSubmit,
  );
  const { onPostLoading, onPostData } = usePostData('partner/create');

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
        <h1 style={{ marginBottom: '1vh' }}>Kolaborasi Bersama Cleansheet</h1>
        <h3>Yuk isi data berikut untuk keperluan kolaborasi bersama Cleansheet</h3>
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
                  name="phone_number"
                  type="tel"
                  label="Nomor Telepon (WA)"
                  placeholder="Nomor telepon perusahaan yang dapat dihubungi dengan WA"
                  value={joinObject.phone_number}
                  error={errors.phone_number}
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
              <FullSubmitButton label="Kirim" type="primary" isLoading={onPostLoading} />
            </div>
          </form>
        </div>
      </div>
    </ModalBase>
  );
}
