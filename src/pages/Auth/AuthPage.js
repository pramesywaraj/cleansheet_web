import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import useLoading from 'hooks/useLoading';
import useSnackbar from 'hooks/useSnackbar';
import { useStore } from 'context/store';

import LogoCleansheet from 'assets/logo_cs.png';
import LandingPageMainImage from 'assets/landingpage_main_image.svg';

import Loading from 'components/Loading/Loading';
import LoginCard from 'components/Cards/LoginCard';
import RegisterCard from 'components/Cards/RegisterCard';

import AuthStyle from 'pages/Auth/auth.module.scss';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, showLoading, hideLoading] = useLoading();
  const [openSnackbar] = useSnackbar();
  const { dispatch } = useStore();
  const location = useLocation();
  const { pathname } = location;
  
  const navigate = useNavigate();
  

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
      navigate('/', { replace: true });
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

      if (data.errors) {
        throw data.errors;
      }

      openSnackbar('success', 'Anda berhasil terdaftar.');
      resetValue();
      hideLoading();

      navigate('/login', { replace: true });
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
    <div className={AuthStyle['auth-wrapper']}>
      <Suspense fallback={<Loading />}>
        <div className={AuthStyle['auth-logo']}>
          <div className={AuthStyle['auth-logo-container']}>
            <Link to="/">
              <img alt="Cleansheet Logo" src={LogoCleansheet} />
            </Link>
          </div>
        </div>
        <div className={AuthStyle['auth-container']}>
          <div className={AuthStyle['auth-image']}>
            <img alt="Cleansheet decoration 1" src={LandingPageMainImage} />
            <p>Bersihin ini itu, jadi mudah dan berkah.</p>
          </div>
          <div className={`${AuthStyle['form-container-flex']}`}>
            {isRegister ? (
              <RegisterCard onRegister={onRegister} isLoading={loading} />
            ) : (
                <LoginCard onLogin={onLogin} isLoading={loading} />
              )}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
