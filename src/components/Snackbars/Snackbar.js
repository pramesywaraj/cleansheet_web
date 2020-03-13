import React from 'react';
import SnackbarStyle from './snackbar.module.scss';

export default function Snackbar({ message, type, isShow }) {
  let colorType;
  switch (type) {
    case 'success':
      colorType = SnackbarStyle['snackbar-show'];
      break;
    case 'fail':
      colorType = SnackbarStyle['snackbar-fail'];
      break;
    case 'info':
      colorType = SnackbarStyle['snackbar-info'];
      break;
    default:
      break;
  }
  return (
    <div
      className={`${SnackbarStyle['snackbar-container']} ${isShow &&
        SnackbarStyle['snackbar-show']} ${colorType}`}
    >
      {message}
    </div>
  );
}
