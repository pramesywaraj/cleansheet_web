/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CardBase from './CardBase';
import FullButton from '../Buttons/FullButton';
import TextInput from '../Input/TextInput';
import useInput from '../../hooks/useInput';

import CardStyle from './card.module.scss';

export default function LoginCard() {
  const [email, bindEmail, resetEmail] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');

  const login = () => {
    console.log('login pressed');
  };

  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']}`}>
        <div className={`${CardStyle['card-container-input']}`}>
          <form>
            <TextInput label="Email" placeholder="Email" value={email} />
            <TextInput label="Password" placeholder="Password" value={password} />
            <div className={`${CardStyle['login-button']}`}>
              <FullButton label="Masuk" type="primary" />
            </div>
          </form>
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
