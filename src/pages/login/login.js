import React from 'react';

import LoginStyle from './login.module.scss';
import logoCleansheet from '../../assets/logo_cs.png';

import LoginCard from '../../components/cards/loginCard';
import landingPageMainImage from '../../assets/landingpage_main_image.svg';

export default function LoginPage() {
  return (
    <div className={LoginStyle.loginWrapper}>
      <header className={LoginStyle.topLogoContainer}>
        <img alt="Cleansheet Logo" src={logoCleansheet} className={LoginStyle.cleansheetLogo} />
      </header>
      <section className={LoginStyle.loginContainer}>
        <div className={LoginStyle.imageContainer}>
          <img
            className={`${LoginStyle.image}`}
            alt="Cleansheet decoration 1"
            src={landingPageMainImage}
          />
        </div>
        <div className={`${LoginStyle['form-container-flex']}`}>
          <LoginCard />
        </div>
      </section>
    </div>
  );
}
