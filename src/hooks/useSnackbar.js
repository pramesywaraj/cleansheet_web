// import { useState, useEffect } from 'react';
import { useStore } from 'context/store';

const AUTO_DISMISS = 3200;

export default function useSnackbar() {
  // const [show, setShow] = useState(false);
  // const [message, setMessage] = useState('');

  const { dispatch } = useStore();

  const openSnackbar = (type, message) => {
    switch (type) {
      case 'success':
        dispatch({ type: 'SNACKBAR_SUCCESS', data: { message } });
        break;
      case 'fail':
        dispatch({ type: 'SNACKBAR_FAIL', data: { message } });
        break;
      case 'info':
        dispatch({ type: 'SNACKBAR_INFO', data: { message } });
        break;
      default:
        break;
    }

    setTimeout(() => {
      dispatch({ type: 'SNACKBAR_CLOSE' });
    }, AUTO_DISMISS);
  };

  return [openSnackbar];
}
