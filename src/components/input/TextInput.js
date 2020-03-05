import React from 'react';
import InputStyle from './input.module.scss';

export default function TextInput({ label, placeholder, name, dataBind }) {
  return (
    <div className={`${InputStyle['text-input-container']}`}>
      <label htmlFor={name}>{label}</label>
      <input
        {...dataBind}
        type={name === 'password' ? 'password' : 'text'}
        name={name}
        placeholder={placeholder}
        className={`${InputStyle['text-input']}`}
      />
    </div>
  );
}
