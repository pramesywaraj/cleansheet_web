import React from 'react';
import useModal from 'hooks/useModal';

import JoinPartnerModal from 'components/Modals/JoinPartnerModal';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import LandingPageStyle from 'pages/LandingPage/landingPage.module.scss';

export default function JoinCleansheetPartner() {
  const [showModal, openModalHandler, closeModalHandler] = useModal();

  return (
    <section id="joinPartner" className="section-gap">
      <div className={LandingPageStyle['join-partner-container']}>
        <div className="text-center">
          <h1>Kolaborasi Bersama Cleansheet</h1>
          <h3>
            Untuk instansi, komunitas, organisasi, dan perusahaan yang ingin berkolaborasi dalam
            kebersihan lingkungan.
          </h3>
          <div className={LandingPageStyle['button-margin']}>
            <PrimaryButton type="primary" clickAction={openModalHandler} label="Gabung Sekarang" />
          </div>
        </div>
      </div>
      <JoinPartnerModal show={showModal} close={closeModalHandler} />
    </section>
  );
}
