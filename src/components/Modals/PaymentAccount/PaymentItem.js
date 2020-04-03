import React from 'react';

import { FaAngleRight } from 'react-icons/fa';
import PaymentItemStyle from './paymentModal.module.scss';
import Image from '../../Image/Image';

export default function PaymentItem({ image, name, description }) {
  return (
    <div className={`${PaymentItemStyle['payment-item-container']}`}>
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
