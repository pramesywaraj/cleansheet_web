import React from 'react';
import { setCommaToMoney } from '../../misc/otherFunctionality';
import CartStyle from './cartPage.module.scss';
import CartCard from '../../components/Cards/CartCard';

import Loading from '../../components/Loading/Loading';
import CartItem from '../../components/Cart/CartItem';

function CartItemList({ cartData, deleteItem }) {
  const { total, products } = cartData;

  return (
    <>
      <div className={`${CartStyle['cart-item-list']}`}>
        {!products ? (
          <div className={`${CartStyle['cart-item-empty']}`}>
            <h4>Tidak ada barang dalam keranjang.</h4>
          </div>
        ) : (
          products.map(item => (
            <CartItem
              key={item.product_id}
              amount={item.amount}
              name={item.product.name}
              price={item.product.price}
              image={item.product.image_url}
              deleteItem={() => deleteItem(item.product_id)}
            />
          ))
        )}
      </div>

      <div className={`${CartStyle['cart-total']}`}>
        <div className={`${CartStyle['flex-row']}`}>
          <p>Total</p>
          <p className={`${CartStyle['cart-total-amount']}`}>
            {`Rp. ${total ? setCommaToMoney(total) : '-'}`}
          </p>
        </div>
      </div>
    </>
  );
}

export default function CartSection({ cartData, isLoading, deleteItem }) {
  return (
    <CartCard label="Keranjang Belanja">
      <div className={`${CartStyle['cart-item-container']}`}>
        {isLoading ? <Loading /> : <CartItemList cartData={cartData} deleteItem={deleteItem} />}
      </div>
    </CartCard>
  );
}
