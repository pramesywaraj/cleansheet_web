import React from 'react';

import CardStyle from './card.module.scss';

export default function CartCard({ label, children }) {
  return (
    <div className={`${CardStyle['cart-card']}`}>
      <div className={`${CardStyle['cart-card-header']}`}>
        <p>{label}</p>
      </div>
      <div className={`${CardStyle['cart-card-content']}`}>{children}</div>
    </div>
  );
}
