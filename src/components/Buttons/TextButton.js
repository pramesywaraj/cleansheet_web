import React from 'react';

import ButtonStyle from 'components/Buttons/button.module.scss';

export default function TextButton({ children, action }) {
  return (
    <button type="button" onClick={action} className={ButtonStyle['text-button']}>
      {children}
    </button>
  );
}
