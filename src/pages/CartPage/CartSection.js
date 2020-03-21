import React from 'react';
import { FaTrash } from 'react-icons/fa';
import CartStyle from './cart.module.scss';
import CartCard from '../../components/Cards/CartCard';
import NumberOfGoods from '../../components/Cart/NumberOfGoods';
import IconButton from '../../components/Buttons/IconButton';
import ProductImagePath from '../../assets/product_pictures/prod2.png';

export default function CartSection() {
  return (
    <CartCard label="Keranjang Belanja">
      <div className={`${CartStyle['cart-item-container']}`}>
        <div className={`${CartStyle['cart-item-row']}`}>
          <div className={`${CartStyle['cart-item-image']}`}>
            <img src={ProductImagePath} alt="Image" />
          </div>
          <div className={`${CartStyle['cart-item-detail']}`}>
            <p className={`${CartStyle['item-price']}`}>Sapu Lidi Kencrot</p>
            <div className={`${CartStyle['cart-item-price-delete']}`}>
              <p>Rp. 15.000</p>
              <IconButton iconColor="#5e5e5e" label={<FaTrash />} />
            </div>
          </div>
        </div>
        <div className={`${CartStyle['cart-item-row']} ${CartStyle['cart-item-button']}`}>
          <NumberOfGoods />
          <div>Total Price per Item</div>
        </div>
      </div>
      <div className={`${CartStyle['cart-total']}`}>
        <div className={`${CartStyle['flex-row']}`}>
          <p>Total</p>
          <p className={`${CartStyle['cart-total-amount']}`}>Rp. 10.000</p>
        </div>
      </div>
    </CartCard>
  );
}
