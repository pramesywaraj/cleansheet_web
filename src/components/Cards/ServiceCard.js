import React from 'react';
import CardBase from './CardBase';
import CardStyle from './card.module.scss';
import SmallButton from '../Buttons/SmallButton';
import Image from '../Image/Image';
import { setCommaToMoney } from '../../misc/otherFunctionality';

export default function ServiceCard({ imgSrc, productName, price, unit, onClick, estimation }) {
  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']} ${CardStyle['card-h-50']}`}>
        <div className={`${CardStyle['card-image-container']}`}>
          <Image src={imgSrc} alt="Services" />
        </div>
        <div className={`${CardStyle['service-detail']}`}>
          <div>
            <p className={`${CardStyle.bold} ${CardStyle.name}`}>{productName}</p>
          </div>
          <div>
            <p className={CardStyle['detail-title']}>{`Harga : Rp. ${setCommaToMoney(price)}/${unit}`}</p>
          </div>
          <div>
            <p className={CardStyle['detail-title']}>Estimasi Pengerjaan:</p>
            <p className={CardStyle['detail-title']}>{estimation}</p>
          </div>
        </div>
        <div className={`${CardStyle['full-width-button']}`}>
          <SmallButton full label="Pesan" clickAction={onClick} />
        </div>
      </div>
    </CardBase>
  );
}
