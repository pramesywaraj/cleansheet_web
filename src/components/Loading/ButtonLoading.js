import React from 'react';
import LoadingStyle from './loading.module.scss';

export default function ButtonLoading() {
  return (
    <div className={`${LoadingStyle['loading-button-container']}`}>
      <div className={`${LoadingStyle['button-loading-spinner']} ${LoadingStyle['color-white']}`} />
    </div>
  );
}
