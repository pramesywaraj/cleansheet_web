import React from 'react';

import ProductCard from 'components/Cards/ProductCard';
import OutlinedButton from 'components/Buttons/OutlinedButton';
import Loading from 'components/Loading/Loading';

import LandingPageStyle from 'pages/LandingPage/landingPage.module.scss';

export default function ProductSection({ goToProductPage, products, loading }) {
  const renderProducts = () => {
    if (!products || products?.length === 0) {
      return (
        <div className="grid-item-20">
          <p>Tidak ada produk untuk ditampilkan.</p>
        </div>
      );
    }

    return products.map(item => (
      <div key={item.id} className="grid-item-20">
        <ProductCard
          imgSrc={item.image_url}
          productName={item.name}
          price={item.price}
          addProduct={goToProductPage}
        />
      </div>
    ));
  };
  return (
    <section className="section-gap">
      <div className="text-center">
        <h1>Produk Kami</h1>
        <p>Dapatkan produk unggulan kami dalam bidang kebersihan.</p>
        <div className={`grid-container ${LandingPageStyle['product-grid']}`}>
          {loading ? <Loading /> : renderProducts()}
        </div>
        <div className={LandingPageStyle['button-margin']}>
          <OutlinedButton clickAction={goToProductPage} label="Selengkapnya" />
        </div>
      </div>
    </section>
  );
}
