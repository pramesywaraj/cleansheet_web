import React from 'react';
import CardBase from 'components/Cards/CardBase';
import SmallButton from 'components/Buttons/SmallButton';
import CardStyle from 'components/Cards/card.module.scss';
import Image from 'components/Image/Image';

import { setCommaToMoney } from 'misc/otherFunctionality';

export default function ProductCard({ imgSrc, productName, price, addProduct }) {
  return (
    <CardBase>
      <div className={`${CardStyle['card-layout']} ${CardStyle['card-h-50']}`}>
        <div className={`${CardStyle['card-image-container']}`}>
          <Image src={imgSrc} alt={productName} />
        </div>
        <div className={CardStyle['product-detail']}>
          <p>{productName}</p>
          <small>{`Harga: Rp. ${setCommaToMoney(price)}`}</small>
        </div>
        <div className={`${CardStyle['full-width-button']}`}>
          <SmallButton full label="Tambah ke Keranjang" clickAction={addProduct} />
        </div>
      </div>
    </CardBase>
  );
}
