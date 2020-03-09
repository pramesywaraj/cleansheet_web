import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useStore } from '../../context/store';
import AuthStyle from './auth.module.scss';
import LogoCleansheet from '../../assets/logo_cs.png';
import LandingPageMainImage from '../../assets/landingpage_main_image.svg';

import Loading from '../../components/Loading/Loading';

const LoginCard = React.lazy(() => import('../../components/Cards/LoginCard'));
const RegisterCard = React.lazy(() => import('../../components/Cards/RegisterCard'));

export default function AuthPage({ location, history }) {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, showLoading, hideLoading] = useLoading();
  const { state, dispatch } = useStore();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [pathname]);

  const onLogin = async payload => {
    showLoading();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
        payload,
      );

      dispatch({ type: 'LOGIN_SUCCESS', data: data.data });
      hideLoading();
      history.push('/');
    } catch (err) {
      console.log(err);
      alert('Terjadi Kesalahan. Silahkan ulangi kembali.');
      hideLoading();
    }
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
      <Suspense fallback={<Loading />}>
        <section className={AuthStyle.loginContainer}>
          <div className={AuthStyle.imageContainer}>
            <img
              className={`${AuthStyle.image}`}
              alt="Cleansheet decoration 1"
              src={LandingPageMainImage}
            />
            <p>Apapun bersih-bersihnya, Cleansheet jagonya. Haha</p>
          </div>
          <div className={`${AuthStyle['form-container-flex']}`}>
            {isRegister ? (
              <RegisterCard onRegister={onRegister} />
            ) : (
              <LoginCard onLogin={onLogin} isLoading={loading} />
            )}
          </div>
        </section>
      </Suspense>
    </div>
  );
}
