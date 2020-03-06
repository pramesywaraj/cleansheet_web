import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthStyle from './auth.module.scss';
import LogoCleansheet from '../../assets/logo_cs.png';

import LoginCard from '../../components/Cards/LoginCard';
import RegisterCard from '../../components/Cards/RegisterCard';
import LandingPageMainImage from '../../assets/landingpage_main_image.svg';

export default function LoginPage({ location }) {
  const [isRegister, setIsRegister] = useState(false);
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [pathname]);

  const onLogin = data => {
    console.log(data);
  };

  const onRegister = data => {
    console.log(data);
  };

  return (
    <div className={AuthStyle.loginWrapper}>
      <header className={AuthStyle.topLogoContainer}>
        <Link to="/">
          <img alt="Cleansheet Logo" src={LogoCleansheet} className={AuthStyle.cleansheetLogo} />
        </Link>
      </header>
      <section className={AuthStyle.loginContainer}>
        <div className={AuthStyle.imageContainer}>
          <img
            className={`${AuthStyle.image}`}
            alt="Cleansheet decoration 1"
            src={LandingPageMainImage}
          />
          <p>Apapun bersih-bersihnya, Cleansheet jagonya.</p>
        </div>
        <div className={`${AuthStyle['form-container-flex']}`}>
          {isRegister ? <RegisterCard onRegister={onRegister} /> : <LoginCard onLogin={onLogin} />}
        </div>
      </section>
    </div>
  );
}
