import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useStore } from '../../context/store';
import useInput from '../../hooks/useInput';
import useLoading from '../../hooks/useLoading';
import useSnackbar from '../../hooks/useSnackbar';
import useFetchData from '../../hooks/useFetchData';
import usePostData from '../../hooks/usePostData';
import useConfirmationDialog from '../../hooks/useConfirmationDialog';
import useModal from '../../hooks/useModal';

import CartStyle from './cartPage.module.scss';

import SendingForm from './SendingForm';
import CartSection from './CartSection';

import PaymentAccountModal from '../../components/Modals/PaymentAccount/PaymentAccountModal';

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
    checkoutCallback,
  );
  const { loading, response } = useFetchData('order/product/cart', false, '', {
    Authorization: `Bearer ${state.user.access_token}`,
  });
  const [data, setData] = useState({ total: '', products: [] });
  const { onPostLoading, onPostData } = usePostData('order/product/cart/checkout');
  const [openSnackbar] = useSnackbar();
  const { openDialog, processDone } = useConfirmationDialog();
  const [showPaymentModal, openPaymentModal, closePaymentModal] = useModal();

  const ref = useRef({});

  useEffect(() => {
    setData({
      total: response.data.total,
      products: response.data.products,
    });

    return () => {
      ref.current.selectedId = null;
    };
  }, [response]);

  async function deleteItem() {
    const { products, total } = data;

    const config = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_ENDPOINT}/order/product/cart/remove`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.user.access_token}`,
      },
      data: {
        product_id: ref.current.selectedId,
      },
    };

    try {
      const deleteResponse = await axios(config);
      if (deleteResponse.status) {
        let tempTotal = total;
        let tempProducts = products;
        tempProducts = tempProducts.filter(function(product) {
          if (product.product_id === ref.current.selectedId) {
            tempTotal -= product.amount * product.product.price;
          }

          return product.product_id !== ref.current.selectedId;
        });

        setData({
          total: tempTotal,
          products: tempProducts,
        });
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
      processDone();
    }
  }

  function deleteItemHandler(id) {
    ref.current.selectedId = id;
    openDialog(
      'Menghapus Barang',
      'Apakah Anda yakin akan menghapus barang ini dari keranjang?',
      deleteItem,
    );
  }

  function checkoutCallbackSuccess() {
    openPaymentModal();
    resetValue();
  }

  function checkoutCallback() {
    const payload = {
      ...deliveryPayload,
      delivery_date: new Date().toISOString(),
    };

    onPostData(payload, checkoutCallbackSuccess);
  }

  return (
    <div className={`${CartStyle['cart-container']}`}>
      <div className={`${CartStyle['cart-col']}`}>
        <CartSection cartData={data} isLoading={loading} deleteItem={deleteItemHandler} />
      </div>
      <div className={`${CartStyle['cart-col']}`}>
        <SendingForm
          handleSubmit={handleSubmit}
          deliveryPayload={deliveryPayload}
          changeFormValue={changeValue}
          errors={errors}
          isLoading={onPostLoading}
        />
      </div>
      {showPaymentModal && (
        <PaymentAccountModal show={showPaymentModal} close={closePaymentModal} />
      )}
    </div>
  );
}
