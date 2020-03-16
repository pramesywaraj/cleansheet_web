import React from 'react';

import CardStyle from './card.module.scss';

export default function CartCard({ label }) {
  return (
    <div className={`${CardStyle['cart-card']}`}>
      <div className={`${CardStyle['cart-card-header']}`}>
        <h3>{label}</h3>
      </div>
      <div className={`${CardStyle['cart-card-content']}`} />
    </div>
  );
}
