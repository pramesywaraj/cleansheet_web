import React from 'react';
import useModal from '../../hooks/useModal';

import LandingPageStyle from './landingPage.module.scss';
import CleansheetOwner from '../../assets/cleansheet-owner.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import JoinCleansheetModal from '../../components/Modals/JoinCleansheetModal';

export default function JoinCleansheetWorkerSection() {
  const [showModal, openModalHandler, closeModalHandler] = useModal();

  return (
    <section id="joinCleansheetWorker" className="section-gap">
      <div className={LandingPageStyle['join-worker-container']}>
        <div className={LandingPageStyle['join-worker-content']}>
          <div className={LandingPageStyle['owner-photo']}>
            <img src={CleansheetOwner} alt="Cleansheet Owner" />
          </div>
          <div className={LandingPageStyle['join-worker-caption']}>
            <h1>Gabung Mitra Cleansheet</h1>
            <h3>Yuk daftarkan dirimu menjadi bagian dari Cleansheet</h3>
            <div className={LandingPageStyle['button-margin']}>
              <PrimaryButton type="white" clickAction={openModalHandler} label="Gabung Sekarang" />
            </div>
          </div>
        </div>
      </div>
      <JoinCleansheetModal show={showModal} close={closeModalHandler} />
    </section>
  );
}
