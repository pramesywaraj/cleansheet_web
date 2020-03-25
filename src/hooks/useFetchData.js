import { useState } from 'react';
import axios from 'axios';

export default function useFetchData(endpoint) {
  const [url, setUrl] = useState(`${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ data: {}, success: false, error: false });

  async function onFetch(payload) {
    setLoading(true);

    try {
      const { data } = await axios.post(url, payload);
      if (data.errors) {
        throw data.errors;
      }
      console.log(data);
      setResponse({ data: data.data, success: true, error: false });
    } catch (err) {
      setResponse({ data: err, error: true, success: false });
    } finally {
      setLoading(false);
    }

    return response;
  }

  return { loading, response };
}
