import React from 'react';
import InputStyle from './input.module.scss';

export default function TextInput({ label, placeholder, name, value, width }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${InputStyle['text-input']}`}
        style={{ width: `${width}vw` }}
      />
    </>
  );
}
