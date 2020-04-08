import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useStore } from '../context/store';

import useSnackbar from './useSnackbar';

export default function useFetchUserTransactions(initialCode) {
  const { state } = useStore();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({ data: [], success: false, error: false });
  // const [paginate, setPaginate] = useState({ next: null, prev: null, current: 1 });
  const [code, setCode] = useState(initialCode);
  const [openSnackbar] = useSnackbar();
  const ref = useRef({});
  const config = {
    method: 'GET',
    url: `${process.env.REACT_APP_API_ENDPOINT}/order/${code}/user`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.user.access_token}`,
    },
  };

  async function fetchData() {
    setLoading(true);
    try {
      const { data } = await axios(config);
      if (data.errors) {
        throw data.errors;
      }
      console.log(data);
      setResponse({ data: data.data, success: true, error: false });

      if (ref.current.firstRender) {
        ref.current.firstRender = false;
      }
    } catch (err) {
      console.log('error when fetching', err);
      if ('message' in err) {
        openSnackbar('fail', err.message);
      } else {
        openSnackbar(
          'fail',
          'Terjadi kesalahan. Silahkan cek koneksi internet Anda dan coba kembali.',
        );
      }
      setResponse({ data: err, error: true, success: false });
    } finally {
      setLoading(false);
    }
  }

  function changeCode(code) {
    setCode(code);
  }

  useEffect(() => {
    ref.current.firstRender = true;
    fetchData();
  }, []);

  useEffect(() => {
    if (!ref.current.firstRender) {
      fetchData();
    }
  }, [code]);

  return { loading, response, changeCode };
}
