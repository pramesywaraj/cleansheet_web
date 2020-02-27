import React from 'react';

export default function TextInput({ label, placeholder, name, value }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} placeholder={placeholder} value={value} />
    </>
  );
}
