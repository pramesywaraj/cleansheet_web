/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CardBase from './CardBase';
import FullButton from '../Buttons/FullButton';
import TextInput from '../Input/TextInput';

import CardStyle from './card.module.scss';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('login pressed');
  };

  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']}`}>
        <div className={`${CardStyle['card-container-input']}`}>
          <TextInput label="Email" placeholder="Email" value={email} />
          <TextInput label="Password" placeholder="Password" value={password} />
        </div>
        <div className={`${CardStyle['login-button']}`}>
          <FullButton label="Masuk" clickAction={login} type="primary" />
        </div>
        <div className={`${CardStyle['login-register-text']}`}>
          <p>
            Belum punya akun? <Link to="/register">Daftar</Link>
          </p>
        </div>
      </div>
    </CardBase>
  );
}
