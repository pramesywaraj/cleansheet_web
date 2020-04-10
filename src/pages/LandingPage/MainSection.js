import React from 'react';
import LogoCleansheet from '../../assets/logo_cs.png';
import LandingPageStyle from './landingPage.module.scss';
import LandingPageMainImage from '../../assets/landingpage_main_image.svg';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

export default function MainSection({ goToProductPage }) {
  return (
    <section id="mainHeader">
      <div
        className={`
          ${LandingPageStyle.flexboxContainer} 
          ${LandingPageStyle.fullPageHeight}
        `}
      >
        <div>
          <img alt="Cleansheet Logo" src={LogoCleansheet} />
          <div
            className={`
              ${LandingPageStyle.captionLayout} 
              ${LandingPageStyle.mainCaption}
            `}
          >
            <p>Start up kebersihan modern berbasis Sociotechnopreneur</p>
          </div>
          <div>
            <PrimaryButton type="primary" clickAction={goToProductPage} label="Pesan" />
          </div>
        </div>
        <div className={`${LandingPageStyle.rightAlign}`}>
          <img
            className={`${LandingPageStyle.mainDecorationImage}`}
            alt="Cleansheet decoration 1"
            src={LandingPageMainImage}
          />
        </div>
      </div>
    </section>
  );
}
