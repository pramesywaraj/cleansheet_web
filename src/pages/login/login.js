import React, { useState } from 'react';

import LoginStyle from './login.module.scss';
import LogoCleansheet from '../../assets/logo_cs.png';

import LoginCard from '../../components/Cards/LoginCard';
import LandingPageMainImage from '../../assets/landingpage_main_image.svg';

export default function LoginPage() {
  const [loginObject, setLoginObject] = useState({
    email: '',
    password: '',
  });
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={LoginStyle.loginWrapper}>
      <header className={LoginStyle.topLogoContainer}>
        <img alt="Cleansheet Logo" src={LogoCleansheet} className={LoginStyle.cleansheetLogo} />
      </header>
      <section className={LoginStyle.loginContainer}>
        <div className={LoginStyle.imageContainer}>
          <img
            className={`${LoginStyle.image}`}
            alt="Cleansheet decoration 1"
            src={LandingPageMainImage}
          />
          <p>Apapun bersih-bersihnya, Cleansheet jagonya.</p>
        </div>
        <div className={`${LoginStyle['form-container-flex']}`}>{!isRegister && <LoginCard />}</div>
      </section>
    </div>
  );
}
