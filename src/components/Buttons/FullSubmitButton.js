import React from 'react';

import ButtonStyle from 'components/Buttons/button.module.scss';
import ButtonLoading from 'components/Loading/ButtonLoading';

export default function FullSubmitButton({ clickAction, label, type, isLoading }) {
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
