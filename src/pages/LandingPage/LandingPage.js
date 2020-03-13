import React from 'react';
import useModal from '../../hooks/useModal';

import PrimaryButton from '../../components/Buttons/PrimaryButton';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import ProductCard from '../../components/Cards/ProductCard';

import LandingPageStyle from './landingPage.module.scss';

import LogoCleansheet from '../../assets/logo_cs.png';
import LandingPageMainImage from '../../assets/landingpage_main_image.svg';

// services image
import CleaningServicesImage from '../../assets/cleaning_services.svg';
import LaundryServicesImage from '../../assets/laundry_washing.svg';
import EnvironmentCleaningImage from '../../assets/env_cleaning.svg';

import JoinCLeansheetModal from '../../components/Modals/JoinCleansheetModal';

const HeaderSection = () => {
  const goToProductPage = () => {
    console.log('Directly into Product');
  };

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
};

const ServiceSection = () => {
  const goToServicePage = () => {
    console.log('Directly into Service Page');
  };

  return (
    <section
      id="services"
      className={`
        ${LandingPageStyle.sectionGap}
      `}
    >
      <div
        className={`
          ${LandingPageStyle.textAlignCenter}
        `}
      >
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
};

const ProductSection = () => {
  const goToProductPage = () => {
    console.log('Go to product page');
  };

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
        <div className={`${LandingPageStyle.productGrid}`}>
          <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
          <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
          <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
          <ProductCard imgSrc="" productName="Sapu Kebersihan" price="15.000" />
        </div>
        <div className={`${LandingPageStyle.buttonMargin5}`}>
          <OutlinedButton clickAction={goToProductPage} label="Selengkapnya" />
        </div>
      </div>
    </section>
  );
};

const ClientSection = () => {
  return (
    <section id="clients">
      <div className={`${LandingPageStyle.textAlignCenter}`}>
        <h1>Klien Kami</h1>
        <div className={`${LandingPageStyle.clientGrid}`}>
          <div className={`${LandingPageStyle.clientImageContainer}`}>
            <img src={require('../../assets/logo-bogor.png')} alt="Client" />
          </div>
          <div className={`${LandingPageStyle.clientImageContainer}`}>
            <img src={require('../../assets/ipb-university.png')} alt="Client" />
          </div>
          <div className={`${LandingPageStyle.clientImageContainer}`}>
            <img src={require('../../assets/logo-bogor.png')} alt="Client" />
          </div>
          <div className={`${LandingPageStyle.clientImageContainer}`}>
            <img src={require('../../assets/ipb-university.png')} alt="Client" />
          </div>
        </div>
      </div>
    </section>
  );
};

const JoinCleansheetWorkerSection = () => {
  const { showModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <section id="joinCleansheetWorker">
      <div className={`${LandingPageStyle.joinWorkerContainer}`}>
        <div className={`${LandingPageStyle.joinWorkerContent}`}>
          <div className={`${LandingPageStyle.joinWorkerImageContainer}`}>
            <img src={require('../../assets/cleansheet-owner.png')} alt="Cleansheet Owner" />
          </div>
          <div className={`${LandingPageStyle.joinWorkerTextContainer}`}>
            <h1>Gabung CleanSheet</h1>
            <h3>Yuk daftarkan dirimu menjadi bagian dari CleanSheet</h3>
            <div className={`${LandingPageStyle.buttonMargin5}`}>
              <PrimaryButton type="white" clickAction={openModalHandler} label="Gabung Sekarang" />
            </div>
          </div>
        </div>
      </div>
      <JoinCLeansheetModal show={showModal} close={closeModalHandler} />
    </section>
  );
};

const JoinCleansheetPartner = () => {
  const goToJoinCleansheetPartner = () => {
    console.log('Go');
  };

  return (
    <section
      id="joinPartner"
      className={`
        ${LandingPageStyle.sectionGap}
      `}
    >
      <div className={`${LandingPageStyle.joinPartnerContainer}`}>
        <div className={`${LandingPageStyle.joinPartnerContent}`}>
          <h1>Gabung Mitra</h1>
          <h3>Untuk Anda yang membutuhkan tenaga kerja kebersihan</h3>
          <div className={`${LandingPageStyle.buttonMargin5}`}>
            <PrimaryButton
              type="primary"
              clickAction={goToJoinCleansheetPartner}
              label="Gabung Sekarang"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  return (
    <>
      <HeaderSection />
      <ServiceSection />
      <ProductSection />
      <ClientSection />
      <JoinCleansheetWorkerSection />
      <JoinCleansheetPartner />
    </>
  );
}
