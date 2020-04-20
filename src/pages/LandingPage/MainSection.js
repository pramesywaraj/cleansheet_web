/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import LogoCleansheet from '../../assets/logo_cs.png';
import LandingPageStyle from './landingPage.module.scss';
import LandingPageMainImage from '../../assets/landingpage_main_image.svg';
import FullSubmitButton from '../../components/Buttons/FullSubmitButton';

export default function MainSection({ goToProductPage }) {
  return (
    <section
      id="mainHeader"
      className={`${LandingPageStyle['flex-row']} ${LandingPageStyle['main-section']}`}
    >
      <div className={LandingPageStyle['main-section-caption']}>
        <div className={LandingPageStyle['main-section-logo']}>
          <img alt="Cleansheet Logo" src={LogoCleansheet} />
        </div>
        <div className={LandingPageStyle['main-section-caption']}>
          <p>
            Start-up kebersihan <b>kekinian</b> berbasis Sociotechnopreneur
          </p>
        </div>
        <div className={LandingPageStyle['main-section-orderbutton']}>
          <FullSubmitButton type="primary" clickAction={goToProductPage} label="Pesan" />
        </div>
      </div>
      <div className={`${LandingPageStyle['main-section-image']}`}>
        <img alt="Cleansheet decoration 1" src={LandingPageMainImage} />
      </div>
    </section>
  );
}
