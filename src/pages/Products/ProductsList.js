import React from 'react';

import ProductStyle from './product.module.scss';

import ProductCard from '../../components/Cards/ProductCard';
import Loading from '../../components/Loading/Loading';
import PaginationButton from '../../components/Navigation/PaginationButton';

export default function ProductsList({ products, loading, error, pagination, addProduct }) {
  if (loading) {
    return (
      <div className={ProductStyle['products-layout']}>
        <Loading />
      </div>
    );
  }

  if (!products || error) {
    return (
      <div className={ProductStyle['products-layout']}>
        <h3>Tidak ada Produk yang dapat ditampilkan.</h3>
      </div>
    );
  }

  return (
    <div className={ProductStyle['products-layout']}>
      <div className={ProductStyle['products-container']}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            imgSrc={product.image_url}
            productName={product.name}
            price={product.price}
            addProduct={() => addProduct(product.id)}
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
