import { useState, useEffect } from 'react';

const AUTO_DISMISS = 3200;

export default function useSnackbar() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const openSnackbar = message => {
    setMessage(message);
    setShow(true);

    setTimeout(() => {
      setShow(false);
      setMessage('');
    }, AUTO_DISMISS);
  };

  return [show, message, openSnackbar];
}
