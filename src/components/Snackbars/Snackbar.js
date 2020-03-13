import React from 'react';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

import SnackbarStyle from './snackbar.module.scss';

export default function Snackbar({ message, type, isShow }) {
  let colorType;
  let iconType;
  switch (type) {
    case 'success':
      colorType = SnackbarStyle['snackbar-show'];
      iconType = <FaCheckCircle className={SnackbarStyle['snackbar-icon']} fontSize="20" />;
      break;
    case 'fail':
      colorType = SnackbarStyle['snackbar-fail'];
      iconType = <FaExclamationTriangle className={SnackbarStyle['snackbar-icon']} fontSize="20" />;
      break;
    case 'info':
      colorType = SnackbarStyle['snackbar-info'];
      iconType = <FaInfoCircle className={SnackbarStyle['snackbar-icon']} fontSize="20" />;
      break;
    default:
      break;
  }
  return (
    <div
      className={`${SnackbarStyle['snackbar-container']} ${isShow &&
        SnackbarStyle['snackbar-show']} ${colorType}`}
    >
      {iconType}
      {message}
    </div>
  );
}
