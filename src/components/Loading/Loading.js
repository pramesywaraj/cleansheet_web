import React from 'react';
import LoadingStyle from 'components/Loading/loading.module.scss';

export default function Loading() {
  return (
    <div className={LoadingStyle['loading-container']}>
      <div className={LoadingStyle['loading-spinner']} />
      <p>Sedang memuat...</p>
    </div>
  );
}
