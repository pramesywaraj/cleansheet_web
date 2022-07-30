import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useStore } from 'context/store';
import useDebounce from 'hooks/useDebounce';
import useSnackbar from 'hooks/useSnackbar';

function AddMinCart(productId, adders, token) {
  const config = {
    method: 'POST',
    url: `${process.env.REACT_APP_API_ENDPOINT}/order/product/cart/ship`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: {
      product_id: productId,
      amount: adders,
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

export default function useAddMinCart() {
  const { state, dispatch } = useStore();
  const [openSnackbar] = useSnackbar();
  const ref = useRef({});

  const addMinDebounce = useDebounce(AddMinCart, 500);

  useEffect(() => {
    if (ref.current.firstRender) {
      addMinDebounce(ref.current.id, ref.current.adders, state.user.access_token)
        .then(res => {
          ref.current.lastAmount = res.data.data.amount;
          openSnackbar('success', 'Jumlah barang berhasil diubah.');
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: 'CART_MODIFY_FAIL',
            data: {
              lastAmount: ref.current.lastAmount,
              lastTotal: ref.current.lastTotal,
              index: ref.current.index,
            },
          });
          openSnackbar('fail', 'Terjadi kesalahan. Tidak dapat menambah/mengurangi jumlah produk.');
        });
    }
  }, [ref.current.adders]);

  // First component Load
  useEffect(() => {
    if (ref.current.id === undefined || !ref.current.firstRender) {
      ref.current.firstRender = true;
    }
  }, []);

  function checkIfIdChange(index, id) {
    if (ref.current.id === null || ref.current.id !== id) {
      ref.current.id = id;
      ref.current.index = index;
      ref.current.adders = 0;
      ref.current.lastAmount = state.cart.products[index].amount;
      ref.current.lastTotal = state.cart.total;
    }
  }

  function add(index, id) {
    checkIfIdChange(index, id);
    const adders = ref.current.adders + 1;
    ref.current.adders = adders;
    dispatch({ type: 'CART_ADD_PRODUCT', data: { index } });
  }

  function min(index, id) {
    checkIfIdChange(index, id);
    // Simulate the minus
    const adders = ref.current.adders - 1;
    if (state.cart.products[index].amount === 1) {
      return;
    }

    ref.current.adders = adders;
    dispatch({ type: 'CART_MIN_PRODUCT', data: { index } });
  }

  return [add, min];
}
