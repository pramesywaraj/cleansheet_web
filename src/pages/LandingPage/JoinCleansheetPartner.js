import React from 'react';
import useModal from '../../hooks/useModal';

import LandingPageStyle from './landingPage.module.scss';

import JoinPartnerModal from '../../components/Modals/JoinPartnerModal';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

export default function JoinCleansheetPartner() {
  const [showModal, openModalHandler, closeModalHandler] = useModal();

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
            <PrimaryButton type="primary" clickAction={openModalHandler} label="Gabung Sekarang" />
          </div>
        </div>
      </div>
      <JoinPartnerModal show={showModal} close={closeModalHandler} />
    </section>
  );
}
