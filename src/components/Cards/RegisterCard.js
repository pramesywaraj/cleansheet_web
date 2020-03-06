/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

import CardBase from './CardBase';
import FullSubmitButton from '../Buttons/FullSubmitButton';
import TextInput from '../Input/TextInput';
import useInput from '../../hooks/useInput';

import CardStyle from './card.module.scss';

export default function RegisterCard({ onRegister }) {
  const [name, bindName, resetName] = useInput('');
  const [city, bindCity, resetCity] = useInput('');
  const [email, bindEmail, resetEmail] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');

  const onSubmitHandler = async e => {
    const registerObj = {
      name,
      city,
      email,
      password,
    };

    e.preventDefault();
    await onRegister(registerObj);
    Promise.all([resetName(), resetCity(), resetEmail(), resetPassword()]);
  };

  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']}`}>
        <div className={`${CardStyle['card-container-input']}`}>
          <form onSubmit={onSubmitHandler}>
            <TextInput name="name" label="Nama" placeholder="Nama" dataBind={bindName} />
            <TextInput name="city" label="Kota" placeholder="Kota" dataBind={bindCity} />
            <TextInput name="email" label="Email" placeholder="Email" dataBind={bindEmail} />
            <TextInput
              name="password"
              label="Password"
              placeholder="Password"
              dataBind={bindPassword}
            />
            <div className={`${CardStyle['login-button']}`}>
              <FullSubmitButton label="Daftar" type="primary" />
            </div>
          </form>
        </div>

        <div className={`${CardStyle['login-register-text']}`}>
          <p>
            Sudah punya akun? <Link to="/login">Masuk</Link>
          </p>
        </div>
      </div>
    </CardBase>
  );
}
