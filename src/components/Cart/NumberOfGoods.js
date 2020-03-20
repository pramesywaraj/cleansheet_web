import React from 'react';
import CartNumberButton from '../Buttons/CartNumberButton';

export default function NumberOfGoods() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '9.5vw',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <CartNumberButton type="minus" />
      <p>0</p>
      <CartNumberButton type="plus" />
    </div>
  );
}
