import { useEffect, useState } from 'react';
import axios from 'axios';

import { useStore } from '../context/store';

export default function Interceptors() {
  const [errorInterceptor, setErrorInterceptor] = useState(undefined);
  const { state, dispatch } = useStore();

  function removeErrorInterceptor() {
    axios.interceptors.response.eject(errorInterceptor);
    setErrorInterceptor(undefined);
  }

  function addErrorInterceptor() {
    const interceptor = axios.interceptors.response.use(mainResponse => {
      const { data, config } = mainResponse;

      if (!data.success) {
        // check kalau errornya token tidak valid
        if (data.code !== 403 && data.errors.message !== 'Token tidak valid!') {
          return Promise.reject(mainResponse.data.errors);
        }

        axios.interceptors.response.eject(interceptor);

        return axios
          .post(`${process.env.REACT_APP_API_ENDPOINT}/auth/token/refresh`, {
            access_token: state.user.access_token,
            refresh_token: state.user.refresh_token,
          })
          .then(secondaryResponse => {
            dispatch({ type: 'TOKEN_REFRESHED', data: secondaryResponse.data.data });

            config.headers.Authorization = `Bearer ${secondaryResponse.data.data.access_token}`;
            return axios(config);
          })
          .catch(error => {
            console.log('There is an error occured when intercepting,', error);
            return Promise.reject(error);
          })
          .finally(addErrorInterceptor);
      }

      return mainResponse;
    });
    setErrorInterceptor(interceptor);
  }

  useEffect(() => {
    addErrorInterceptor();

    return () => {
      removeErrorInterceptor();
    };
  }, []);

  return null;
}
