import React from 'react';

import DialogStyle from './dialog.module.scss';
import ModalBase from '../Modals/ModalBase';

import PrimaryButton from '../Buttons/PrimaryButton';

export default function ConfirmationDialog({ show, title, caption }) {
  return (
    <ModalBase show>
      <div className={`${DialogStyle['dialog-container']}`}>
        <div className={`${DialogStyle['dialog-title']}`}>
          <h2>{title}</h2>
        </div>
        <div className={`${DialogStyle['dialog-caption']}`}>
          <p>{caption}</p>
        </div>
        <div className={`${DialogStyle['dialog-button']}`}>
          <PrimaryButton label="Tidak" />
          <PrimaryButton label="Ya" type="primary" />
        </div>
      </div>
    </ModalBase>
  );
}
