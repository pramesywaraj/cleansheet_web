import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useStore } from '../context/store';

import useSnackbar from './useSnackbar';

export default function useFetchData(endpoint, pagination, initialCategory, headers) {
  const { state } = useStore();
  const [config, setConfig] = useState({
    method: 'GET',
    url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.user.access_token}`,
    },
  });
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({ data: [], success: false, error: false });
  const [paginate, setPaginate] = useState({ next: null, prev: null, current: 1 });
  // const [category, setCategory] = useState(initialCategory);
  const [openSnackbar] = useSnackbar();
  const ref = useRef({});
  // const categoryChange = useRef(false);

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
    ref.current.firstMount = true;
    ref.current.urlChange = false;

    if (ref.current.firstMount) {
      if (initialCategory && !ref.current.urlChange) {
        setConfig({
          ...config,
          url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}?category=${initialCategory}`,
        });
      } else {
        onFetch();
        ref.current.firstMount = false;
      }
    }

    return () => {
      ref.current = {};
    };
  }, []);

  useEffect(() => {
    if (!ref.current.firstMount && response.success) {
      onFetch();
    }

    ref.current.firstMount = false;
  }, [paginate.current]);

  // useEffect(() => {
  //   if (categoryChange.current) {
  //     onFetch();
  //     categoryChange.current = false;
  //   } else {
  //     categoryChange.current = true;
  //   }
  // }, [category]);

  useEffect(() => {
    if (ref.current.urlChange) {
      onFetch();
      ref.current.urlChange = false;
    } else {
      ref.current.urlChange = true;
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

  function fetchByCategory(type) {
    ref.current.urlChange = true;
    setConfig({
      ...config,
      url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}?category=${type}`,
    });
  }

  return { loading, response, paginate, nextHandler, prevHandler, fetchByCategory, onFetch };
}
