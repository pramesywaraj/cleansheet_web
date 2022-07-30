import React from 'react';
import { FaTrash } from 'react-icons/fa';
import CartStyle from 'components/Cart/cart.module.scss';

import NumberOfGoods from 'components/Cart/NumberOfGoods';
import IconButton from 'components/Buttons/IconButton';
import Image from 'components/Image/Image';

import { setCommaToMoney } from 'misc/otherFunctionality';

export default function CartItem({ amount, name, price, image, deleteItem, addItem, minItem }) {
  return (
    <div className={`${CartStyle['cart-item-container']}`}>
      <div className={`${CartStyle['cart-item-row']}`}>
        <div className={`${CartStyle['cart-item-image-container']}`}>
          <Image src={image} alt="Services" />
        </div>
        <div className={`${CartStyle['cart-item-detail']}`}>
          <p className={`${CartStyle['item-price']}`}>{name}</p>
          <div className={`${CartStyle['cart-item-price-delete']}`}>
            <p>{`Rp. ${setCommaToMoney(price)}/pcs`}</p>
            <IconButton iconColor="#a1a1a1" label={<FaTrash />} btnHandler={deleteItem} />
          </div>
        </div>
      </div>
      <div className={`${CartStyle['cart-item-row']} ${CartStyle['cart-item-button']}`}>
        <NumberOfGoods goodsTotal={amount} add={addItem} min={minItem} />
        <p>{`Rp. ${setCommaToMoney(amount * price)}`}</p>
      </div>
    </div>
  );
}
