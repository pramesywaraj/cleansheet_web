import React from 'react';
import InputStyle from './input.module.scss';

export default function DatePicker({ label, placeholder, name, value, error, onChange, min, max }) {
  return (
    <div className={`${InputStyle['text-input-container']}`}>
      <label className={InputStyle['text-input-label']} htmlFor={name}>
        {label}
      </label>
      <input
        min={min}
        max={max}
        onChange={onChange}
        value={value}
        type="date"
        name={name}
        placeholder={placeholder}
        className={`${InputStyle['text-input']}`}
      />
      {error ? <p className={InputStyle['text-input-error']}>{error}</p> : ''}
    </div>
  );
}
