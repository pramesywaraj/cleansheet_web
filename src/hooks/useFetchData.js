import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useSnackbar from './useSnackbar';

export default function useFetchData(endpoint, pagination, headers) {
  const [config, setConfig] = useState({
    method: 'GET',
    url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`,
    headers,
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ data: {}, success: false, error: false });
  const [paginate, setPaginate] = useState({ next: null, prev: null, current: 1 });
  const [openSnackbar] = useSnackbar();
  const firstMount = useRef(true);

  async function onFetch() {
    setLoading(true);

    try {
      const { data } = await axios(config);
      if (data.errors) {
        throw data.errors;
      }
      setResponse({ data: data.data, success: true, error: false });

      if (pagination) {
        setPaginate({ ...paginate, next: data.data.next_page_url, prev: data.data.prev_page_url });
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

  useEffect(() => {
    if (firstMount) {
      onFetch();
      firstMount.current = false;
    }

    return () => {
      firstMount.current = true;
    };
  }, []);

  useEffect(() => {
    if (!firstMount.current) {
      onFetch();
    }
  }, [config.url]);

  function nextHandler() {
    if (paginate.next === null) return;
    setConfig({
      ...config,
      url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}?page=${paginate.current + 1}`,
    });
    setPaginate({ ...paginate, current: paginate.current + 1 });
  }

  function prevHandler() {
    if (paginate.prev === null) return;
    setConfig({
      ...config,
      url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}?page=${paginate.current - 1}`,
    });
    setPaginate({ ...paginate, current: paginate.current - 1 });
  }

  return { loading, response, paginate, nextHandler, prevHandler };
}
