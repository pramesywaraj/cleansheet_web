import React from 'react';
import LoadingStyle from 'components/Loading/loading.module.scss';

export default function SmallLoading() {
  return (
    <div className={LoadingStyle['small-loading-container']}>
      <div className={LoadingStyle['small-loading-spinner']} />
      <p>Sedang memuat...</p>
    </div>
  );
}
