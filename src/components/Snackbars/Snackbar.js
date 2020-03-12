import React from 'react';
import SnackbarStyle from './snackbar.module.scss';

export default function Snackbar({ message, type, isShow }) {
  return (
    <div
      className={`${SnackbarStyle['snackbar-container']} ${isShow &&
        SnackbarStyle['snackbar-show']}`}
    >
      {message}
    </div>
  );
}
