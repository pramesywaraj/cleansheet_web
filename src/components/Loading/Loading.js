import React from 'react';
import LoadingStyle from './loading.module.scss';

export default function Loading() {
  return (
    <div className={LoadingStyle['loading-container']}>
      <div className={LoadingStyle['loading-spinner1']} />
      <div className={LoadingStyle['loading-spinner2']} />
    </div>
  );
}
