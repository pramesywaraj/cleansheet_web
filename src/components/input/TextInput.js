import React from 'react';
import InputStyle from './input.module.scss';

export default function TextInput({ label, placeholder, name, value }) {
  return (
    <div className={`${InputStyle['text-input-container']}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={name === 'password' ? 'password' : 'text'}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${InputStyle['text-input']}`}
      />
    </div>
  );
}
