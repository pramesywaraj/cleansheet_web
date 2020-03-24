import React from 'react';
import CartNumberButton from '../Buttons/CartNumberButton';

export default function NumberOfGoods({ goodsTotal, add, min }) {
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
      <CartNumberButton type="minus" clickAction={min} />
      <p>{goodsTotal}</p>
      <CartNumberButton type="plus" clickAction={add} />
    </div>
  );
}
