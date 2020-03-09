/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

import CardBase from './CardBase';
import FullSubmitButton from '../Buttons/FullSubmitButton';
import TextInput from '../Input/TextInput';
import useInput from '../../hooks/useInput';

import CardStyle from './card.module.scss';

export default function LoginCard({ onLogin }) {
  const [loginObj, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      email: '',
      password: '',
    },
    onSubmit,
  );

  function onSubmit() {
    console.log(loginObj);
    console.log('submitted');
    resetValue();
  }

  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']}`}>
        <div className={`${CardStyle['card-container-input']}`}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="email"
              label="Email"
              type="text"
              placeholder="Email"
              value={loginObj.email}
              error={errors.email}
              onChange={changeValue}
            />
            <TextInput
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={loginObj.password}
              onChange={changeValue}
              error={errors.password}
            />
            <div className={`${CardStyle['login-button']}`}>
              <FullSubmitButton label="Masuk" type="primary" />
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
