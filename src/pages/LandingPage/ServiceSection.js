import React from 'react';
import LandingPageStyle from './landingPage.module.scss';

import CleaningServicesImage from '../../assets/cleaning_services.svg';
import LaundryServicesImage from '../../assets/laundry_washing.svg';
import EnvironmentCleaningImage from '../../assets/env_cleaning.svg';

import OutlinedButton from '../../components/Buttons/OutlinedButton';

export default function ServiceSection({ goToServicePage }) {
  return (
    <section
      id="services"
      className={`section-gap section-full-height ${LandingPageStyle['service-section']}`}
    >
      <h1 className="text-center">Layanan Kami</h1>
      <div className={LandingPageStyle['service-section-container']}>
        <div className={LandingPageStyle['service-description']}>
          <div className={LandingPageStyle['service-image']}>
            <img alt="Layanan Kebersihan" src={CleaningServicesImage} />
          </div>
          <h4>Layanan Kebersihan</h4>
          <p>Cleansheet dapat membersihkan rumah, kantor, dan kebersihan apapun.</p>
        </div>
        <div className={LandingPageStyle['service-description']}>
          <div className={LandingPageStyle['service-image']}>
            <img alt="Layanan Cuci Barang" src={LaundryServicesImage} />
          </div>
          <h4>Layanan Cuci Barang</h4>
          <p>Cleansheet dapat membersihkan barang apapun dari sepatu, tas, karpet, dan helm.</p>
        </div>
        <div className={LandingPageStyle['service-description']}>
          <div className={LandingPageStyle['service-image']}>
            <img alt="Layanan Penanganan Lingkungan" src={EnvironmentCleaningImage} />
          </div>
          <h4>Layanan Penanganan Lingkungan</h4>
          <p>
            Cleansheet dapat mengatasi permasalahan lingkungan seperti sampah dan lain sebagainya.
          </p>
        </div>
      </div>
      <div className={LandingPageStyle['service-section-button']}>
        <OutlinedButton clickAction={goToServicePage} label="Selengkapnya" />
      </div>
    </section>
  );
}
