import { useState } from 'react';
import axios from 'axios';

import { useStore } from 'context/store';
import useSnackbar from 'hooks/useSnackbar';

export default function usePostData(endpoint) {
  const [onPostLoading, setPostLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [openSnackbar] = useSnackbar();
  const { state } = useStore();

  function defaultCallback() {
    console.log('Request has been finished');
  }

  async function onPostData(payload, callback = defaultCallback) {
    setPostLoading(true);

    if (isError) {
      setIsError(false);
    }

    const { user } = state;

    const config = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.access_token}`,
      },
      data: payload,
    };

    try {
      const { data } = await axios(config);
      if (data.errors) {
        throw data.errors;
      }

      if (data.success) {
        openSnackbar('success', 'Permintaan Anda berhasil terkirim.');
        setIsError(false);
        callback();
      }
    } catch (err) {
      console.log('error when posting', err);
      setIsError(true);

      if ('message' in err) {
        openSnackbar('fail', err.message);
      } else {
        openSnackbar(
          'fail',
          'Terjadi kesalahan. Silahkan cek koneksi internet Anda dan coba kembali.',
        );
      }
      // setResponse({ data: err, error: true, success: false });
    } finally {
      setPostLoading(false);
    }
  }

  return { isError, onPostLoading, onPostData };
}
