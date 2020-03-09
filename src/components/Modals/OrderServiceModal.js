import React from 'react';
import ModalStyle from './modal.module.scss';

export default function OrderServiceModal() {
  return (
    <div className={ModalStyle}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}
