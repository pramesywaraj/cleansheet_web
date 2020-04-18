/* eslint-disable react/button-has-type */
import React from 'react';
import ButtonStyle from './button.module.scss';

import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';

export default function WhatsappButton() {
  return (
    <form action="https://wa.me/6281297984971 ">
      <button type="submit" className={`${ButtonStyle.button} ${ButtonStyle.whatsappButton}`}>
        <WhatsappIcon className={`${ButtonStyle.whatsappIcon}`} />
        Hubungi Kami
      </button>
    </form>
  );
}
