import React from 'react';
import CardBase from './CardBase';
import CardStyle from './card.module.scss';
import SmallButton from '../Buttons/SmallButton';
import Image from '../Image/Image';
import { setCommaToMoney } from '../../misc/otherFunctionality';

export default function ServiceCard({ imgSrc, productName, price, unit, onClick, estimation }) {
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
              <p style={{ fontWeight: '600' }}>Harga:</p>
              <p>{`Rp. ${setCommaToMoney(price)}/${unit}`}</p>
            </div>
            <div>
              <p style={{ fontWeight: '600' }}>Estimasi Pengerjaan:</p>
              <p>{estimation}</p>
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
