import React from 'react';
import CardBase from './cardBase';
import SmallButton from '../button/smallButton';

import cardStyle from './card.module.scss';

import ProductImagePath from '../../assets/product_pictures/prod1.png';

export default function ProductCard({ imgSrc, productName, price }) {

    const buyClickAction = () => {
        console.log('Buy a product');
    }

    return (
        <CardBase>
            <div className={`${cardStyle.productImageContainer}`}>
                <img 
                    className={`${cardStyle.productImage}`}
                    src={ProductImagePath} 
                    alt="Products"
                />
            </div>
            <div className={`${cardStyle.productDetail}`}>
                <p className={`${cardStyle.bold}`}>
                    {productName}
                </p>
                <p>Harga: Rp.{price}</p>
            </div>
            <div className={`${cardStyle.buyButton}`}>
                <SmallButton 
                    label="Beli"
                    clickAction={buyClickAction}
                />
            </div>
        </CardBase>
    )
}
