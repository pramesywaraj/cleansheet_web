import React from 'react';

import ProductStyle from './product.module.scss';

import ProductCard from '../../components/Cards/ProductCard';
import Loading from '../../components/Loading/Loading';
import PaginationButton from '../../components/Navigation/PaginationButton';

export default function ProductsList({ products, loading }) {
  if (loading) {
    return (
      <div className={ProductStyle['products-container']}>
        <Loading />
      </div>
    );
  }

  if (!products) {
    return (
      <div className={ProductStyle['products-layout']}>
        <h3>Tidak ada Produk untuk ditampilkan.</h3>
      </div>
    );
  }

  return (
    <div className={ProductStyle['products-layout']}>
      <div className={ProductStyle['products-container']}>
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
      </div>
      <PaginationButton />
    </div>
  );
}
