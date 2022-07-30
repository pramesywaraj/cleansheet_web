import React from 'react';
import ButtonStyle from 'components/Buttons/button.module.scss';

export default function IconButton({ label, btnHandler, iconColor, disabled }) {
  return (
    <button
      type="button"
      className={`${ButtonStyle['icon-button']}`}
      style={{ color: iconColor }}
      onClick={btnHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
