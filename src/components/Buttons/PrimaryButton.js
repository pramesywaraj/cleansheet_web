import React from 'react';

import ButtonStyle from 'components/Buttons/button.module.scss';

export default function PrimaryButton({ clickAction, label, type }) {
  const buttonColor =
    type === 'primary' ? ButtonStyle.backgroundPrimary : ButtonStyle.backgroundWhite;

  return (
    <button
      type="button"
      onClick={clickAction}
      className={`
        ${ButtonStyle.button}
        ${ButtonStyle.primaryButton}
        ${buttonColor}
        `}
    >
      {label}
    </button>
  );
}
