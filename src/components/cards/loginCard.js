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
  const [email, bindEmail, resetEmail] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');

  const onSubmitHandler = e => {
    const loginObj = {
      email,
      password,
    };
    e.preventDefault();
    onLogin(loginObj);
    Promise.all([resetEmail, resetPassword]);
  };

  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']}`}>
        <div className={`${CardStyle['card-container-input']}`}>
          <form onSubmit={onSubmitHandler}>
            <TextInput name="email" label="Email" placeholder="Email" dataBind={bindEmail} />
            <TextInput
              name="password"
              label="Password"
              placeholder="Password"
              dataBind={bindPassword}
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
