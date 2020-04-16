import React from 'react';
import LandingPageStyle from './landingPage.module.scss';

import CleaningServicesImage from '../../assets/cleaning_services.svg';
import LaundryServicesImage from '../../assets/laundry_washing.svg';
import EnvironmentCleaningImage from '../../assets/env_cleaning.svg';

import OutlinedButton from '../../components/Buttons/OutlinedButton';

export default function ServiceSection({ goToServicePage }) {
  return (
    <section id="services" className="section-gap">
      <div className="text-center">
        <h1>Layanan Kami</h1>
        <div
          className={`
            ${LandingPageStyle.gridContainer}
          `}
        >
          <div className={`${LandingPageStyle.serviceDesc}`}>
            <img alt="Layanan Kebersihan" src={CleaningServicesImage} />
            <h4>Layanan Kebersihan</h4>
            <p>
              Cleansheet dapat membersihkan rumah dan kosan apapun sebelum atau sehabis acara sampai
              pindahan.
            </p>
          </div>
          <div className={`${LandingPageStyle.serviceDesc}`}>
            <img alt="Layanan Cuci Barang" src={LaundryServicesImage} />
            <h4>Layanan Cuci Barang</h4>
            <p>
              Cleansheet dapat membersihkan barang apapun dari sepatu, tas, karpet, helm sampai
              kendaraan.
            </p>
          </div>
          <div className={`${LandingPageStyle.serviceDesc}`}>
            <img alt="Layanan Penanganan Lingkungan" src={EnvironmentCleaningImage} />
            <h4>Layanan Penanganan Lingkungan</h4>
            <p>
              Cleansheet dapat mengatasi permasalahan lingkungan seperti sampah dan lain sebagainya.
            </p>
          </div>
        </div>
        <div className={`${LandingPageStyle.buttonMargin5}`}>
          <OutlinedButton clickAction={goToServicePage} label="Selengkapnya" />
        </div>
      </div>
    </section>
  );
}
