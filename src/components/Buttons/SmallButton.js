import React from 'react';
import ButtonStyle from './button.module.scss';

export default function SmallButton({ clickAction, label, full }) {
  return (
    <button
      type="button"
      onClick={clickAction}
      className={`${ButtonStyle.button} ${ButtonStyle.smallButton} ${
        full ? ButtonStyle.fullWidthButton : ''
      }`}
    >
      {label}
    </button>
  );
}
