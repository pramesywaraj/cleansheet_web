import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useSnackbar from './useSnackbar';

export default function useFetchData(endpoint, pagination, initialCategory, headers) {
  const [config, setConfig] = useState({
    method: 'GET',
    url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({ data: {}, success: false, error: false });
  const [paginate, setPaginate] = useState({ next: null, prev: null, current: 1 });
  const [category, setCategory] = useState(initialCategory);
  const [openSnackbar] = useSnackbar();
  const firstMount = useRef(true);
  const urlChange = useRef(false);
  const categoryChange = useRef(false);

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
    urlChange.current = true;
    setConfig({
      ...config,
      url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}?category=${type}`,
    });
  }

  useEffect(() => {
    if (firstMount.current) {
      if (category && !urlChange.current) {
        setConfig({
          ...config,
          url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}?category=${category}`,
        });
      } else {
        onFetch();
        firstMount.current = false;
      }
    }

    return () => {
      firstMount.current = true;
      urlChange.current = false;
    };
  }, []);

  useEffect(() => {
    if (!firstMount.current && response.success) {
      onFetch();
    }

    firstMount.current = false;
  }, [paginate.current]);

  useEffect(() => {
    if (categoryChange.current) {
      onFetch();
      categoryChange.current = false;
    } else {
      categoryChange.current = true;
    }
  }, [category]);

  useEffect(() => {
    if (urlChange.current) {
      onFetch();
      urlChange.current = false;
    } else {
      urlChange.current = true;
    }
  }, [config.url]);

  return { loading, response, paginate, nextHandler, prevHandler, fetchByCategory, onFetch };
}
