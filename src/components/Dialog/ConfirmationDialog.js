import React from 'react';
import useConfirmationDialog from '../../hooks/useConfirmationDialog';

import DialogStyle from './dialog.module.scss';
import ModalBase from '../Modals/ModalBase';

import FullSubmitButton from '../Buttons/FullSubmitButton';

export default function ConfirmationDialog({ show, title, caption }) {
  const { onConfirmDialog, closeDialog, dialogProcess } = useConfirmationDialog();
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
          <div>
            <FullSubmitButton label="Tidak" clickAction={closeDialog} />
          </div>
          <div>
            <FullSubmitButton
              label="Ya"
              type="primary"
              clickAction={onConfirmDialog}
              isLoading={dialogProcess}
            />
          </div>
        </div>
      </div>
    </ModalBase>
  );
}
