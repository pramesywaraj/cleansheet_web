import React from 'react';

import ButtonStyle from './button.module.scss';

export default function FullButton({ clickAction, label, type }) {
  const buttonColor =
    type === 'primary' ? ButtonStyle.backgroundPrimary : ButtonStyle.backgroundWhite;

  return (
    <button
      type="button"
      onClick={clickAction}
      className={`
        ${ButtonStyle.button}
        ${ButtonStyle.fullWidthButton}
        ${buttonColor}
        `}
    >
      {label}
    </button>
  );
}
