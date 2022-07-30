import React from 'react';
import InputStyle from 'components/Input/input.module.scss';

export default function RadioInput({ label, name, value, onChange }) {
  return (
    <div>
      <input
        type="radio"
        onChange={onChange}
        value={value}
        name={name}
        className={`${InputStyle['radio-input']}`}
      />
      <label className={InputStyle['radio-input-label']} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
