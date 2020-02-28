import React from 'react';
import buttonStyle from './button.module.scss';

export default function SmallButton({ clickAction, label }) {
  return (
    <button
      type="button"
      onClick={clickAction}
      className={`${buttonStyle.button} ${buttonStyle.smallButton}`}
    >
      {label}
    </button>
  );
}
