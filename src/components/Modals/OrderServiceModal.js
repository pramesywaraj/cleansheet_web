import React from 'react';
import ModalBase from './ModalBase';
import ModalStyle from './modal.module.scss';
import useInput from '../../hooks/useInput';

import TextInput from '../Input/TextInput';

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
        <h2>Hahahah</h2>
        <div className={ModalStyle['modal-service-form']}>
          <form onSubmit={onSubmit}>
            <TextInput
              name="name"
              type="text"
              label="Nama Lengkap"
              placeholder="Nama lengkap pemesan"
              value={serviceObj.name}
              error={errors.name}
              onChange={changeValue}
            />
          </form>
        </div>
      </div>
    </ModalBase>
  );
}
