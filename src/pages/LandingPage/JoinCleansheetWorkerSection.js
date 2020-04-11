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
      <div className={`${LandingPageStyle.joinWorkerContainer}`}>
        <div className={`${LandingPageStyle.joinWorkerContent}`}>
          <div className={`${LandingPageStyle.joinWorkerImageContainer}`}>
            <img src={CleansheetOwner} alt="Cleansheet Owner" />
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
      <JoinCleansheetModal show={showModal} close={closeModalHandler} />
    </section>
  );
}
