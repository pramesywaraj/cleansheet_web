import React from 'react';

import ButtonStyle from 'components/Buttons/button.module.scss';

export default function OutlinedButton({ clickAction, label }) {
  return (
    <button
      type="button"
      onClick={clickAction}
      className={`${ButtonStyle.button} ${ButtonStyle.outlinedButton}`}
    >
      {label}
    </button>
  );
}
