import React from 'react';

import ProductCard from 'components/Cards/ProductCard';
import Loading from 'components/Loading/Loading';
import PaginationButton from 'components/Navigation/PaginationButton';

import ProductStyle from 'pages/Products/product.module.scss';

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
      <div className={`grid-container ${ProductStyle['products-container']}`}>
        {products.map(product => (
          <div key={product.id} className="grid-item-20">
            <ProductCard
              imgSrc={product.image_url}
              productName={product.name}
              price={product.price}
              addProduct={() => addProduct(product.id)}
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
