/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

import CardBase from 'components/Cards/CardBase';
import FullSubmitButton from 'components/Buttons/FullSubmitButton';
import TextInput from 'components/Input/TextInput';
import useInput from 'hooks/useInput';

import CardStyle from 'components/Cards/card.module.scss';

export default function RegisterCard({ onRegister, isLoading }) {
  const [registerObj, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      city: '',
      email: '',
      password: '',
    },
    onSubmit,
  );

  function onSubmit() {
    onRegister(registerObj, resetValue);
  }

  return (
    <CardBase>
      <div className={`${CardStyle['card-auth-layout']}`}>
        <form onSubmit={handleSubmit} className={`${CardStyle['card-auth-form']}`}>
          <TextInput
            name="name"
            label="Nama"
            placeholder="Nama"
            type="text"
            value={registerObj.name}
            onChange={changeValue}
            error={errors.name}
          />
          <TextInput
            name="city"
            label="Kota"
            placeholder="Kota"
            type="text"
            value={registerObj.city}
            onChange={changeValue}
            error={errors.city}
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Email"
            type="text"
            value={registerObj.email}
            error={errors.email}
            onChange={changeValue}
          />
          <TextInput
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            value={registerObj.password}
            error={errors.password}
            onChange={changeValue}
          />
          <FullSubmitButton label="Daftar" type="primary" isLoading={isLoading} />
        </form>

        <div className={`${CardStyle['login-register-text']}`}>
          <p>
            Sudah punya akun? <Link to="/login">Masuk</Link>
          </p>
        </div>
      </div>
    </CardBase>
  );
}
