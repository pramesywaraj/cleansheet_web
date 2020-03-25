import React, { useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import ProductStyle from './product.module.scss';

import ProductsList from './ProductsList';

export default function ProductPage() {
  const { loading, response } = useFetchData('master/products');

  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);
  return (
    <div className={ProductStyle['products-wrapper']}>
      <div className={ProductStyle['products-title']}>
        <h1>Produk Kebersihan</h1>
        <p>
          Menggunakan pelayanan modern dan canggih serta selalu memberi yang terbaik untuk membuat
          barang anda tampak bersih layaknya barang baru
        </p>
      </div>
      <ProductsList loading={loading} error={response.error} products={response.data.products} />
    </div>
  );
}
