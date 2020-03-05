/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CardBase from './CardBase';
import FullButton from '../Buttons/FullButton';
import TextInput from '../Input/TextInput';

import CardStyle from './card.module.scss';

export default function RegisterCard() {
  const [name, setname] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('login pressed');
  };

  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']}`}>
        <div className={`${CardStyle['card-container-input']}`}>
          <TextInput name="name" label="Nama" placeholder="Nama" value={name} />
          <TextInput name="city" label="Kota" placeholder="Kota" value={city} />
          <TextInput name="email" label="Email" placeholder="Email" value={email} />
          <TextInput name="password" label="Password" placeholder="Password" value={password} />
        </div>
        <div className={`${CardStyle['login-button']}`}>
          <FullButton label="Daftar" clickAction={login} type="primary" />
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
