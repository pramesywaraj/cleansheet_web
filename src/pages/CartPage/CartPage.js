import React from 'react';

import CartStyle from './cart.module.scss';

export default function CartPage() {
  return (
    <div className={`${CartStyle['cart-container']}`}>
      <div className={`${CartStyle['cart-col']}`} />
      <div className={`${CartStyle['cart-col']}`} />
    </div>
  );
}
