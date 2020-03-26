import React from 'react';
import CardBase from './CardBase';
import CardStyle from './card.module.scss';
import SmallButton from '../Buttons/SmallButton';
import Image from '../Image/Image';

export default function ServiceCard({ imgSrc, productName, price, unit, onClick }) {
  return (
    <CardBase>
      <div className={`${CardStyle['card-service-layout']}`}>
        <div className={`${CardStyle['card-service-image_container']}`}>
          <Image style={`${CardStyle['service-image']}`} src={imgSrc} alt="Services" />
        </div>
        <div className={`${CardStyle['service-detail']}`}>
          <p className={`${CardStyle.bold}`}>{productName}</p>
          <div className={`${CardStyle['service-detail-estimation']}`}>
            <div>
              <p>Harga:</p>
              <p>{`Rp. ${price}/${unit}`}</p>
            </div>
            <div>
              <p>Estimasi:</p>
              <p>1-2 Hari</p>
            </div>
          </div>
        </div>
        <div className={`${CardStyle['full-width-button']}`}>
          <SmallButton full label="Pesan" clickAction={onClick} />
        </div>
      </div>
    </CardBase>
  );
}
