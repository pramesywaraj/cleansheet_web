import React from 'react';

import CartStyle from './cart.module.scss';
import CartCard from '../../components/Cards/CartCard';

export default function CartSection() {
  return (
    <CartCard label="Keranjang Belanja">
      <div className={`${CartStyle['']}`}>
        <div />
      </div>
      <div className={`${CartStyle['cart-total']}`}>
        <div className={`${CartStyle['flex-row']}`}>
          <p>Total</p>
          <p className={`${CartStyle['cart-total-amount']}`}>Rp. 10.000</p>
        </div>
      </div>
    </CartCard>
  );
}
