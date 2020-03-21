import React from 'react';
import ProductStyle from './product.module.scss';
import ProductCard from '../../components/Cards/ProductCard';
import PaginationButton from '../../components/Navigation/PaginationButton';

export default function ProductPage() {
  return (
    <div className={ProductStyle['products-wrapper']}>
      <div className={ProductStyle['products-title']}>
        <h1>Produk Kebersihan</h1>
        <p>
          Menggunakan pelayanan modern dan canggih serta selalu memberi yang terbaik untuk membuat
          barang anda tampak bersih layaknya barang baru
        </p>
      </div>

      <div className={ProductStyle['products-container']}>
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
      </div>

      <PaginationButton />
    </div>
  );
}
