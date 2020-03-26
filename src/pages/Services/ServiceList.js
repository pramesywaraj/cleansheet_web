import React from 'react';

import ServiceStyle from './servicesPage.module.scss';

import ServiceCard from '../../components/Cards/ServiceCard';
import Loading from '../../components/Loading/Loading';
import PaginationButton from '../../components/Navigation/PaginationButton';

export default function ServiceList({ services, loading, error, pagination }) {
  if (loading) {
    return (
      <div className={ServiceStyle['services-layout']}>
        <Loading />
      </div>
    );
  }

  if (!services || error) {
    return (
      <div className={ServiceStyle['services-layout']}>
        <h3>Tidak ada Layanan yang dapat ditampilkan.</h3>
      </div>
    );
  }

  return (
    <div className={ServiceStyle['services-layout']}>
      <div className={ServiceStyle['services-container']}>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            imgSrc={service.image_url}
            productName={service.title}
            price={service.price}
            unit={service.unit}
          />
        ))}
      </div>
      <PaginationButton
        next={pagination.paginate.next}
        prev={pagination.paginate.prev}
        nextHandler={pagination.nextHandler}
        prevHandler={pagination.prevHandler}
      />
    </div>
  );
}
