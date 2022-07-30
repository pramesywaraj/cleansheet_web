import React from 'react';
import InputStyle from 'components/Input/input.module.scss';

export default function TextInput({
  label,
  pattern,
  placeholder,
  type,
  name,
  value,
  error,
  onChange,
}) {
  return (
    <div className={`${InputStyle['text-input-container']}`}>
      <label className={InputStyle['text-input-label']} htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${InputStyle['text-input']}`}
        pattern={pattern}
      />
      {error ? <p className={InputStyle['text-input-error']}>{error}</p> : ''}
    </div>
  );
}
