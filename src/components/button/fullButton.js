import React from 'react';

import buttonStyle from './button.module.scss';

export default function FullButton({ clickAction, label, type }) {
  const buttonColor =
    type === 'primary' ? buttonStyle.backgroundPrimary : buttonStyle.backgroundWhite;

  return (
    <button
      type="button"
      onClick={clickAction}
      className={`
        ${buttonStyle.button}
        ${buttonStyle.fullWidthButton}
        ${buttonColor}
        `}
    >
      {label}
    </button>
  );
}
