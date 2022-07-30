import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import ButtonStyle from 'components/Buttons/button.module.scss';

export default function CartNumberButton({ clickAction, type }) {
  return (
    <button
      type="button"
      onClick={clickAction}
      className={`${ButtonStyle.button} ${ButtonStyle['cart-button']} ${
        type === 'plus' ? ButtonStyle['cart-button-plus'] : ButtonStyle['cart-button-minus']
      }`}
    >
      {type === 'plus' ? <FaPlus color="#fafafa" /> : <FaMinus color="#A3A3A3" />}
    </button>
  );
}
