import React from 'react';

import CartStyle from './cart.module.scss';

import SendingForm from './SendingForm';
import CartSection from './CartSection';

export default function CartPage() {
  return (
    <div className={`${CartStyle['cart-container']}`}>
      <div className={`${CartStyle['cart-col']}`}>
        <CartSection />
      </div>
      <div className={`${CartStyle['cart-col']}`}>
        <SendingForm />
      </div>
    </div>
  );
}
