import { useState } from 'react';

export default function useLoading() {
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return [loading, showLoading, hideLoading];
}
