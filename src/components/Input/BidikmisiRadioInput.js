import React from 'react';
import RadioInput from './RadioInput';

import InputStyle from './input.module.scss';

export default function BidikmisiRadioInput({ name, onChange, error }) {
  return (
    <div className={InputStyle['radio-input-container']}>
      <p className={InputStyle['text-input-label']}>Apakah Anda mahasiswa Bidikmisi?</p>
      <div className={InputStyle['radio-content']}>
        <RadioInput label="Ya" name={name} value={1} onChange={onChange} />
        <RadioInput label="Tidak" name={name} value={0} onChange={onChange} />
      </div>
      {error ? <p className={InputStyle['text-input-error']}>{error}</p> : ''}
    </div>
  );
}
