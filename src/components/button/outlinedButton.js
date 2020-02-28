import React from 'react';

import buttonStyle from './button.module.scss';

export default function OutlinedButton({ clickAction, label }) {
  return (
    <button
      type="button"
      onClick={clickAction}
      className={`${buttonStyle.button} ${buttonStyle.outlinedButton}`}
    >
      {label}
    </button>
  );
}
