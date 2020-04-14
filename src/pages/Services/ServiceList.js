import React from 'react';

import ServiceStyle from './servicesPage.module.scss';

import ServiceCard from '../../components/Cards/ServiceCard';
import Loading from '../../components/Loading/Loading';
import PaginationButton from '../../components/Navigation/PaginationButton';

export default function ServiceList({ services, loading, error, pagination, openServiceModal }) {
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
      <div className={`grid-container ${ServiceStyle['services-container']}`}>
        {services.map(service => (
          <div key={service.id} className="grid-item-20">
            <ServiceCard
              imgSrc={service.image_url}
              productName={service.title}
              price={service.price}
              unit={service.unit}
              estimation={service.estimation_time}
              onClick={() => openServiceModal(service.id)}
            />
          </div>
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
