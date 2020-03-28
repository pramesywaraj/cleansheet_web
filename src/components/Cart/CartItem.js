import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import useAddMinCart from '../../hooks/useAddMinCart';

import CartStyle from './cartcomponent.module.scss';

import NumberOfGoods from './NumberOfGoods';
import IconButton from '../Buttons/IconButton';

import ProductImagePath from '../../assets/product_pictures/prod2.png';

export default function CartItem({ initCounter }) {
  const [counter, add, min] = useAddMinCart(1);
  return (
    <div className={`${CartStyle['cart-item-container']}`}>
      <div className={`${CartStyle['cart-item-row']}`}>
        <div className={`${CartStyle['cart-item-image']}`}>
          <img src={ProductImagePath} alt="Image" />
        </div>
        <div className={`${CartStyle['cart-item-detail']}`}>
          <p className={`${CartStyle['item-price']}`}>Sapu Lidi Kencrot</p>
          <div className={`${CartStyle['cart-item-price-delete']}`}>
            <p>Rp. 15.000 /pcs</p>
            <IconButton iconColor="#a1a1a1" label={<FaTrash />} />
          </div>
        </div>
      </div>
      <div className={`${CartStyle['cart-item-row']} ${CartStyle['cart-item-button']}`}>
        <NumberOfGoods goodsTotal={counter} add={add} min={min} />
        <p>Rp. 15.000</p>
      </div>
    </div>
  );
}
