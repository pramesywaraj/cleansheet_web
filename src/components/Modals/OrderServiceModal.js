import React from 'react';
import { FaTimes } from 'react-icons/fa';
import ModalStyle from './modal.module.scss';

export default function OrderServiceModal({ children, show, close }) {
  return (
    <div
      className={`${ModalStyle['modal-wrapper']} ${
        show ? ModalStyle['modal-display'] : ModalStyle['modal-hide']
      }`}
    >
      <section className={ModalStyle['modal-register']}>
        <div className={ModalStyle['modal-close']}>
          <FaTimes onClick={close} className={ModalStyle['modal-close-button']} />
        </div>
        {children}
      </section>
    </div>
  );
}
