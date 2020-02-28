/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CardBase from './cardBase';
import FullButton from '../button/fullButton';
import TextInput from '../input/TextInput';

import cardStyle from './card.module.scss';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('login pressed');
  };

  return (
    <CardBase>
      <div className={`${cardStyle['card-layout']}`}>
        <div className={`${cardStyle['card-container-input']}`}>
          <TextInput label="Email" placeholder="Email" value={email} />
          <TextInput label="Password" placeholder="Password" value={password} />
        </div>
        <div className={`${cardStyle['login-button']}`}>
          <FullButton label="Masuk" clickAction={login} type="primary" />
        </div>
        <div className={`${cardStyle['login-register-text']}`}>
          <p>
            Belum punya akun? <Link to="/">Daftar</Link>
          </p>
        </div>
      </div>
    </CardBase>
  );
}
