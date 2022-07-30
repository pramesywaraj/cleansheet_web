import React from 'react';
import { FaTimes } from 'react-icons/fa';
import ModalStyle from 'components/Modals/modal.module.scss';

export default function OrderServiceModal({ children, show, close, title }) {
  return (
    <div className={`${ModalStyle['modal-wrapper']} ${!show ? ModalStyle['modal-hide'] : ''}`}>
      <div className={ModalStyle['modal-container']}>
        <div className={ModalStyle['modal-header']}>
          <p className={ModalStyle['modal-title']}>{title}</p>
          {close && <FaTimes onClick={close} className={ModalStyle['modal-close-button']} />}
        </div>

        {children}
      </div>
    </div>
  );
}
