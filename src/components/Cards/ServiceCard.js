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
        <div className={`${CardStyle['service-detail']}`}>
          <p>Nama layanan</p>
          <div className={`${CardStyle['service-detail-estimation']}`}>
            <div>
              <p>Harga:</p>
              <p>Rp. 15.000/Kg</p>
            </div>
            <div>
              <p>Estimasi:</p>
              <p>1-2 Hari</p>
            </div>
          </div>
        </div>
        <div className={`${CardStyle['service-button']}`}>
          <SmallButton full label="Pesan" clickAction={buyClickAction} />
        </div>
      </div>
    </CardBase>
  );
}
