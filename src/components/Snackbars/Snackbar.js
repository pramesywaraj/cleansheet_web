import React from 'react';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

import SnackbarStyle from './snackbar.module.scss';

export default function Snackbar({ message, type, isShow }) {
  let colorType;
  let iconType;
  switch (type) {
    case 'success':
      colorType = SnackbarStyle['snackbar-success'];
      iconType = <FaCheckCircle fontSize="1.3em" />;
      break;
    case 'fail':
      colorType = SnackbarStyle['snackbar-fail'];
      iconType = <FaExclamationTriangle fontSize="1.3em" />;
      break;
    case 'info':
      colorType = SnackbarStyle['snackbar-info'];
      iconType = <FaInfoCircle fontSize="1.3em" />;
      break;
    default:
      break;
  }
  return (
    <div
      className={`${SnackbarStyle['snackbar-container']} ${isShow &&
        SnackbarStyle['snackbar-show']} ${colorType}`}
    >
      <div className={SnackbarStyle['snackbar-icon']}>{iconType}</div>
      <div className={SnackbarStyle['snackbar-message']}>{message}</div>
    </div>
  );
}
