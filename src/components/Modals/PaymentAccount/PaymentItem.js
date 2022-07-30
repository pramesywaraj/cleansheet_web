import React from 'react';

import { FaAngleRight } from 'react-icons/fa';
import PaymentItemStyle from 'components/Modals/PaymentAccount/paymentModal.module.scss';
import Image from 'components/Image/Image';

export default function PaymentItem({ image, name, description, onSelect }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      aria-pressed="false"
      tabIndex={0}
      onClick={onSelect}
      className={`${PaymentItemStyle['payment-item-container']}`}
    >
      <div className={PaymentItemStyle['payment-item-logo_container']}>
        <Image src={image} alt="Logo Bank" style={PaymentItemStyle['item-logo']} />
      </div>
      <div className={PaymentItemStyle['payment-item-description']}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <div>
        <FaAngleRight size="2em" color="#707070" />
      </div>
    </div>
  );
}
