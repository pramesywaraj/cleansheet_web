import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/store';
import useFetchData from '../../hooks/useFetchData';
import usePostData from '../../hooks/usePostData';
import useModal from '../../hooks/useModal';
import useSnackbar from '../../hooks/useSnackbar';

import ProductStyle from './product.module.scss';
import ProductsList from './ProductsList';

import AddProductToCartModal from '../../components/Modals/AddProductToCartModal';

export default function ProductPage() {
  const { state } = useStore();
  const history = useNavigate();
  const { loading, response, paginate, nextHandler, prevHandler } = useFetchData(
    'master/products',
    true,
  );
  const { onPostLoading, onPostData, isError } = usePostData('order/product/cart/ship');
  const [showModal, openModalHandler, closeModalHandler] = useModal();
  const [openSnackbar] = useSnackbar();

  const ref = useRef({});

  useEffect(() => {
    ref.current.rendered = true;

    return () => {};
  }, []);

  // Effect for handling the error when ship the product
  useEffect(() => {
    if (ref.current.rendered && isError) {
      closeModalHandler();
    }
  }, [isError]);

  function addProductToCart(id) {
    if (!state.isLoggedIn) {
      openSnackbar('info', 'Silahkan login terlebih dahulu.');
      history.push('/login');
    }

    const payload = {
      product_id: id,
      amount: 1,
    };

    openModalHandler();
    onPostData(payload);
  }

  function goToCart() {
    history.push('/keranjang');
  }

  return (
    <div className={ProductStyle['products-wrapper']}>
      <AddProductToCartModal
        loading={onPostLoading}
        show={showModal}
        close={closeModalHandler}
        isError={isError}
        toCartAction={goToCart}
      />
      <div className={ProductStyle['products-title']}>
        <h1>Produk Kebersihan</h1>
        <p>
          Menggunakan pelayanan modern dan canggih serta selalu memberi yang terbaik untuk membuat
          barang anda tampak bersih layaknya barang baru
        </p>
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
