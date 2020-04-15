import React from 'react';
import LoadingStyle from './loading.module.scss';

export default function ButtonLoading({ color }) {
  return (
    <div className={`${LoadingStyle['loading-button-container']}`}>
      <div
        className={`${LoadingStyle['button-loading-spinner']}`}
        style={{ backgroundColor: color || 'white' }}
      />
    </div>
  );
}
