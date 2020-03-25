import React from 'react';
import useInput from '../../hooks/useInput';
import useLoading from '../../hooks/useLoading';

import CartStyle from './cart.module.scss';

import SendingForm from './SendingForm';
import CartSection from './CartSection';

export default function CartPage() {
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
  const [loading, showLoading, hideLoading] = useLoading();
  const cartData = 0;

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
        <CartSection cartData={cartData} />
      </div>
      <div className={`${CartStyle['cart-col']}`}>
        <SendingForm
          handleSubmit={checkout}
          deliveryPayload={deliveryPayload}
          changeFormValue={changeValue}
          errors={errors}
          isLoading={loading}
        />
      </div>
    </div>
  );
}
