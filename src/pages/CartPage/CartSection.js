import React from 'react';
import { setCommaToMoney } from '../../misc/otherFunctionality';
import CartStyle from './cartPage.module.scss';
import CartCard from '../../components/Cards/CartCard';

import Loading from '../../components/Loading/Loading';
import CartItem from '../../components/Cart/CartItem';
import useAddMinCart from '../../hooks/useAddMinCart';

function CartItemList({ totalPrice, products, deleteItem, addItem, minItem }) {
  const renderItem = (item, index) => (
    <CartItem
      key={item.product_id}
      amount={item.amount}
      name={item.product.name}
      price={item.product.price}
      image={item.product.image_url}
      deleteItem={() => deleteItem(item.product_id)}
      addItem={() => addItem(index, item.product_id)}
      minItem={() => minItem(index, item.product_id)}
    />
  );

  return (
    <>
      <div className={`${CartStyle['cart-item-list']}`}>
        {!products || products.length === 0 ? (
          <div className={`${CartStyle['cart-item-empty']}`}>
            <h4>Tidak ada barang dalam keranjang.</h4>
          </div>
        ) : (
          products.map(renderItem)
        )}
      </div>

      <div className={`${CartStyle['cart-total']}`}>
        <div className={`${CartStyle['flex-row']}`}>
          <p>Total Harga</p>
          <p className={`${CartStyle['cart-total-amount']}`}>
            {`Rp. ${totalPrice ? setCommaToMoney(totalPrice) : '-'}`}
          </p>
        </div>
      </div>
    </>
  );
}

export default function CartSection({ cartData, isLoading, deleteItem }) {
  const [add, min] = useAddMinCart();

  return (
    <CartCard label="Keranjang Belanja">
      <div className={`${CartStyle['cart-item-container']}`}>
        {isLoading ? (
          <Loading />
        ) : (
          <CartItemList
            totalPrice={cartData.total}
            products={cartData.products}
            deleteItem={deleteItem}
            addItem={add}
            minItem={min}
          />
        )}
      </div>
    </CartCard>
  );
}
