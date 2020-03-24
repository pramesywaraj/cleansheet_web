import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import useSnackbar from '../../hooks/useSnackbar';
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
  const [openSnackbar] = useSnackbar();
  const { dispatch } = useStore();
  const { pathname } = location;

  const source = axios.CancelToken.source();

  useEffect(() => {
    if (pathname === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [pathname]);

  useEffect(() => {
    return () => {
      source.cancel();
    };
  }, []);

  async function onLogin(payload, resetValue) {
    showLoading();
    try {
      const option = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
        data: payload,
        config: { cancelToken: source.token },
      };

      const { data } = await axios(option);

      if (data.errors) {
        throw data.errors;
      }

      await dispatch({ type: 'LOGIN_SUCCESS', data: data.data });
      openSnackbar('success', 'Anda berhasil masuk.');
      resetValue();
      hideLoading();
      history.push('/');
    } catch (err) {
      if ('message' in err) {
        openSnackbar('fail', err.message);
      } else {
        openSnackbar(
          'fail',
          'Terjadi kesalahan ketika memasuki aplikasi. Silahkan cek koneksi internet Anda dan coba kembali.',
        );
      }

      hideLoading();
    }
  }

  async function onRegister(payload, resetValue) {
    showLoading();
    try {
      const option = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_ENDPOINT}/auth/register`,
        data: payload,
        config: { cancelToken: source.token },
      };

      const { data } = await axios(option);

      console.log(data);

      if (data.errors) {
        throw data.errors;
      }

      openSnackbar('success', 'Anda berhasil terdaftar.');
      resetValue();
      hideLoading();

      history.replace('/login');
    } catch (err) {
      if ('message' in err) {
        openSnackbar('fail', err.message);
      } else {
        openSnackbar(
          'fail',
          'Terjadi kesalahan ketika memasuki aplikasi. Silahkan cek koneksi internet Anda dan coba kembali.',
        );
      }

      hideLoading();
    }
  }

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
            <p>Apapun bersih-bersihnya, Cleansheet jagonya.</p>
          </div>
          <div className={`${AuthStyle['form-container-flex']}`}>
            {isRegister ? (
              <RegisterCard onRegister={onRegister} isLoading={loading} />
            ) : (
              <LoginCard onLogin={onLogin} isLoading={loading} />
            )}
          </div>
        </section>
      </Suspense>
    </div>
  );
}
