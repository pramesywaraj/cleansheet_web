import React from 'react';

import { FaAngleRight } from 'react-icons/fa';
import PaymentItemStyle from './paymentModal.module.scss';
import Image from '../../Image/Image';

import LogoCSAbu from '../../../assets/logo_cs_abu.png';

export default function PaymentItem() {
  return (
    <div className={`${PaymentItemStyle['payment-item-container']}`}>
      <div className={PaymentItemStyle['payment-item-logo_container']}>
        <Image src={LogoCSAbu} alt="Logo Bank" style={PaymentItemStyle['item-logo']} />
      </div>
      <div className={PaymentItemStyle['payment-item-description']}>
        <p>Title</p>
        <p>Description</p>
      </div>
      <div>
        <FaAngleRight size="2em" color="#707070" />
      </div>
    </div>
  );
}
