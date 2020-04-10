import React from 'react';

import LandingPageStyle from './landingPage.module.scss';

import ProductCard from '../../components/Cards/ProductCard';
import OutlinedButton from '../../components/Buttons/OutlinedButton';

export default function ProductSection({ goToProductPage, products }) {
  return (
    <section
      className={`
                ${LandingPageStyle.sectionGap}
        `}
    >
      <div
        className={`
                ${LandingPageStyle.textAlignCenter}
            `}
      >
        <h1>Produk Kami</h1>
        <p>Dapatkan produk unggulan kami dalam bidang kebersihan.</p>
        <div className={`${LandingPageStyle['product-grid']}`}>
          <div className={LandingPageStyle['product-grid-item']}>
            <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
          </div>
        </div>
        <div className={`${LandingPageStyle.buttonMargin5}`}>
          <OutlinedButton clickAction={goToProductPage} label="Selengkapnya" />
        </div>
      </div>
    </section>
  );
}
