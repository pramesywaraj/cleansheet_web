import React from 'react';
import InputStyle from 'components/Input/input.module.scss';

export default function TextArea({ label, placeholder, name, value, error, onChange }) {
  return (
    <div className={`${InputStyle['text-input-container']}`}>
      <label className={InputStyle['text-input-label']} htmlFor={name}>
        {label}
      </label>
      <textarea
        rows="4"
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`${InputStyle['text-input']}`}
      />
      {error ? <p className={InputStyle['text-input-error']}>{error}</p> : ''}
    </div>
  );
}
