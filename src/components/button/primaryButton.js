import React from 'react';

import buttonStyle from './button.module.scss';

export default function PrimaryButton({ clickAction, label, type }) {
  const buttonColor =
    type === 'primary' ? buttonStyle.backgroundPrimary : buttonStyle.backgroundWhite;

  return (
    <button
      type="button"
      onClick={clickAction}
      className={`
        ${buttonStyle.button}
        ${buttonStyle.primaryButton}
        ${buttonColor}
        `}
    >
      {label}
    </button>
  );
}
