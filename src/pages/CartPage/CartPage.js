import React, { useEffect } from 'react';
import { useStore } from '../../context/store';
import useInput from '../../hooks/useInput';
import useLoading from '../../hooks/useLoading';
import useFetchData from '../../hooks/useFetchData';

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
  const { loading, response } = useFetchData('order/product/cart', false, '', {
    Authorization: `Bearer ${state.user.access_token}`,
  });

  const [formLoading, showLoading, hideLoading] = useLoading();

  useEffect(() => {
    console.log(response.data);
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

  return (
    <div className={`${CartStyle['cart-container']}`}>
      <div className={`${CartStyle['cart-col']}`}>
        <CartSection cartData={response.data} isLoading={loading} />
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
