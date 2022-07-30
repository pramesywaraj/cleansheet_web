import React from 'react';

import DialogStyle from 'components/Dialog/dialog.module.scss';
import ModalBase from 'components/Modals/ModalBase';

import FullSubmitButton from 'components/Buttons/FullSubmitButton';

function ConfirmationDialog({ show, title, caption, onConfirm, isLoading, closeDialog }) {
  return (
    <ModalBase show={show}>
      <div className={`${DialogStyle['dialog-container']}`}>
        <div className={`${DialogStyle['dialog-title']}`}>
          <h2>{title}</h2>
        </div>
        <div className={`${DialogStyle['dialog-caption']}`}>
          <p>{caption}</p>
        </div>
        <div className={`${DialogStyle['dialog-button']}`}>
          <div className={`${DialogStyle['dialog-button-reject']}`}>
            <FullSubmitButton label="Tidak" clickAction={closeDialog} />
          </div>
          <div className={`${DialogStyle['dialog-button-confirm']}`}>
            <FullSubmitButton
              label="Ya"
              type="primary"
              clickAction={onConfirm}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </ModalBase>
  );
}

export default ConfirmationDialog;
