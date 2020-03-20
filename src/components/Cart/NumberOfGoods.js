import React from 'react';
import CartNumberButton from '../Buttons/CartNumberButton';

export default function NumberOfGoods() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <CartNumberButton type="minus" />
      <div>0</div>
      <CartNumberButton type="plus" />
    </div>
  );
}
