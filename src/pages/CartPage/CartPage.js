import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useStore } from '../../context/store';
import useInput from '../../hooks/useInput';
import useLoading from '../../hooks/useLoading';
import useSnackbar from '../../hooks/useSnackbar';
import useFetchData from '../../hooks/useFetchData';
import usePostData from '../../hooks/usePostData';
import useConfirmationDialog from '../../hooks/useConfirmationDialog';

import CartStyle from './cartPage.module.scss';

import SendingForm from './SendingForm';
import CartSection from './CartSection';

export default function CartPage() {
  const { state } = useStore();
  const [deliveryPayload, changeValue, resetValue, handleSubmit, errors] = useInput(
    {
      name: '',
      email: '',
      phone: '',
      city: '',
      postal_code: '',
      address: '',
      notes: '',
    },
    checkout,
  );
  const { openDialog, processStatus, closeDialog } = useConfirmationDialog();
  const { loading, response } = useFetchData('order/product/cart', false, '', {
    Authorization: `Bearer ${state.user.access_token}`,
  });
  const [formLoading, showLoading, hideLoading] = useLoading();
  const [openSnackbar] = useSnackbar();

  const selectedId = useRef(null);

  useEffect(() => {
    return () => {
      selectedId.current = null;
    };
  }, [response]);

  function checkout(e) {
    // console.log('Checkout');
    e.preventDefault();
    showLoading();

    setTimeout(() => {
      hideLoading();
      resetValue();
    }, 1000);
  }

  async function deleteItem() {
    const config = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_ENDPOINT}/order/product/cart/remove`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.user.access_token}`,
      },
      data: {
        product_id: selectedId.current,
      },
    };

    try {
      const deleteResponse = await axios(config);
      if (deleteResponse.status) {
        openSnackbar('success', 'Produk berhasil dihapus.');
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log('error when deleting a product from cart', err);
      if ('message' in err) {
        openSnackbar('fail', err.message);
      } else {
        openSnackbar(
          'fail',
          'Terjadi kesalahan. Silahkan cek koneksi internet Anda dan coba kembali.',
        );
      }
    } finally {
      processStatus(false);
      closeDialog();
    }
  }

  function deleteItemHandler(id) {
    selectedId.current = id;
    openDialog(
      'Menghapus Barang',
      'Apakah Anda yakin akan menghapus barang ini dari keranjang?',
      deleteItem,
    );
  }

  return (
    <div className={`${CartStyle['cart-container']}`}>
      <div className={`${CartStyle['cart-col']}`}>
        <CartSection cartData={response.data} isLoading={loading} deleteItem={deleteItemHandler} />
      </div>
      <div className={`${CartStyle['cart-col']}`}>
        <SendingForm
          handleSubmit={checkout}
          deliveryPayload={deliveryPayload}
          changeFormValue={changeValue}
          errors={errors}
          isLoading={formLoading}
        />
      </div>
    </div>
  );
}
