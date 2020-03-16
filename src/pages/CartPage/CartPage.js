import React from 'react';

import CartStyle from './cart.module.scss';

import CartCard from '../../components/Cards/CartCard';

export default function CartPage() {
  return (
    <div className={`${CartStyle['cart-container']}`}>
      <div className={`${CartStyle['cart-col']}`}>
        <CartCard label="Keranjang Belanja" />
      </div>
      <div className={`${CartStyle['cart-col']}`}>
        <CartCard label="Data Pengiriman" />
      </div>
    </div>
  );
}
