/* eslint-disable react/button-has-type */
import React from 'react';

import { ReactComponent as WhatsappIcon } from 'assets/whatsapp.svg';

import ButtonStyle from 'components/Buttons/button.module.scss';

export default function WhatsappButton() {
  return (
    <form action="https://wa.me/xxxxxxxxxxx">
      <button type="submit" className={`${ButtonStyle.button} ${ButtonStyle.whatsappButton}`}>
        <WhatsappIcon className={`${ButtonStyle.whatsappIcon}`} />
        Hubungi Kami
      </button>
    </form>
  );
}
