import React from 'react';
import CardBase from './CardBase';
import SmallButton from '../Buttons/SmallButton';

import CardStyle from './card.module.scss';

import ProductImagePath from '../../assets/product_pictures/prod1.png';

export default function ProductCard({ imgSrc, productName, price }) {
  const buyClickAction = () => {
    console.log('Buy a product');
  };

  return (
    <CardBase>
      <div className={`${CardStyle['product-layout']}`}>
        <div className={`${CardStyle.productImageContainer}`}>
          <img
            className={`${CardStyle.productImage}`}
            src={imgSrc || ProductImagePath}
            alt="Products"
          />
        </div>
        <div className={`${CardStyle.productDetail}`}>
          <p className={`${CardStyle.bold}`}>{productName}</p>
          <small>{`Harga: Rp. ${price}`}</small>
        </div>
        <div className={`${CardStyle['full-width-button']}`}>
          <SmallButton full label="Tambah ke Keranjang" clickAction={buyClickAction} />
        </div>
      </div>
    </CardBase>
  );
}
