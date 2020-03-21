import React from 'react';
import ButtonStyle from './button.module.scss';

export default function IconButton({ label, onClick, iconColor }) {
  return (
    <button
      type="button"
      className={`${ButtonStyle['icon-button']}`}
      style={{ color: iconColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
