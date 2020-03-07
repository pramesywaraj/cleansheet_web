import React from 'react';
import CardBase from './CardBase';
import CardStyle from './card.module.scss';
import SmallButton from '../Buttons/SmallButton';

import ProductImagePath from '../../assets/product_pictures/prod1.png';

export default function ServiceCard({ imgSrc, productName, price }) {
  const buyClickAction = () => {
    console.log('take a service');
  };
  return (
    <CardBase>
      <div className={`${CardStyle['card-service-layout']}`}>
        <div className={`${CardStyle['card-service-image_container']}`}>
          <img className={`${CardStyle['service-image']}`} src={ProductImagePath} alt="Services" />
        </div>
        <div className={`${CardStyle.productDetail}`}>
          <p className={`${CardStyle.bold}`}>{productName}</p>
          <small>
            Harga: Rp.
            {price}
          </small>
        </div>
        <div className={`${CardStyle.buyButton}`}>
          <SmallButton label="Beli" clickAction={buyClickAction} />
        </div>
      </div>
    </CardBase>
  );
}
