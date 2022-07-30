import React from 'react';
import CartNumberButton from 'components/Buttons/CartNumberButton';

import CartStyle from 'components/Cart/cart.module.scss';

export default function NumberOfGoods({ goodsTotal, add, min }) {
  return (
    <div className={CartStyle['cart-add-min-button']}>
      <CartNumberButton type="minus" clickAction={min} />
      <p>{goodsTotal}</p>
      <CartNumberButton type="plus" clickAction={add} />
    </div>
  );
}
