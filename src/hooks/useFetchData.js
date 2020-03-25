import { useState, useEffect } from 'react';
import axios from 'axios';
import useSnackbar from './useSnackbar';

export default function useFetchData(endpoint, headers) {
  const [config, setConfig] = useState({
    method: 'GET',
    url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`,
    headers,
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ data: {}, success: false, error: false });
  const [openSnackbar] = useSnackbar();

  async function onFetch() {
    setLoading(true);

    try {
      const { data } = await axios(config);
      if (data.errors) {
        throw data.errors;
      }
      setResponse({ data: data.data, success: true, error: false });
    } catch (err) {
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

    return response;
  }

  useEffect(() => {
    onFetch();
  }, []);

  return { loading, response };
}
