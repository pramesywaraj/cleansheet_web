import React from 'react';
import LoadingStyle from './loading.module.scss';

export default function ButtonLoading() {
  return (
    <div className={`${LoadingStyle['loading-button-container']}`}>
      <div className={`${LoadingStyle['loading-spinner1']} ${LoadingStyle['color-white']}`} />
      <div className={`${LoadingStyle['loading-spinner2']} ${LoadingStyle['color-white']}`} />
    </div>
  );
}
