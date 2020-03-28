import React, { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import usePostData from '../../hooks/usePostData';
import useModal from '../../hooks/useModal';

import ProductStyle from './product.module.scss';
import ProductsList from './ProductsList';

import AddProductToCartModal from '../../components/Modals/AddProductToCartModal';

export default function ProductPage() {
  const { loading, response, paginate, nextHandler, prevHandler } = useFetchData(
    'master/products',
    true,
  );
  const { onPostLoading, onPostData } = usePostData('cart/ship');
  const [selectedProductId, setSelected] = useState('');
  const { showModal, openModalHandler, closeModalHandler } = useModal();

  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);

  async function addProductToCart(id) {
    openModalHandler();
    setSelected(id);
    // onPostData();
  }

  return (
    <div className={ProductStyle['products-wrapper']}>
      <AddProductToCartModal loading={onPostLoading} show={showModal} close={closeModalHandler} />
      <div className={ProductStyle['products-title']}>
        <h1>Produk Kebersihan</h1>
        <p>
          Menggunakan pelayanan modern dan canggih serta selalu memberi yang terbaik untuk membuat
          barang anda tampak bersih layaknya barang baru
        </p>
        <p>{selectedProductId}</p>
      </div>
      <ProductsList
        addProduct={addProductToCart}
        pagination={{ paginate, nextHandler, prevHandler }}
        loading={loading}
        error={response.error}
        products={response.data.products}
      />
    </div>
  );
}
