import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ButtonStyle from './button.module.scss';

export default function CartNumberButton({ clickAction, type }) {
  return (
    <button type="button" onClick={clickAction} className={`${ButtonStyle.button}`}>
      {type === 'plus' ? <FaPlus /> : <FaMinus />}
    </button>
  );
}
