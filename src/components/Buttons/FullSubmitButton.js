import React from 'react';

import ButtonStyle from './button.module.scss';
import ButtonLoading from '../Loading/ButtonLoading';

export default function FullButton({ clickAction, label, type, isLoading }) {
  const buttonColor =
    type === 'primary' ? ButtonStyle.backgroundPrimary : ButtonStyle.backgroundWhite;

  return (
    <div className={`${ButtonStyle['submit-button']}`}>
      <button
        type="submit"
        onClick={clickAction}
        className={`
        ${ButtonStyle.button}
        ${ButtonStyle.fullWidthButton}
        ${buttonColor}
        `}
      >
        {isLoading ? <ButtonLoading /> : label}
      </button>
    </div>
  );
}
