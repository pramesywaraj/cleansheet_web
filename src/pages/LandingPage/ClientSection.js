import React from 'react';

import LandingPageStyle from './landingPage.module.scss';
import BogorLogo from '../../assets/logo-bogor.png';
import IPBLogo from '../../assets/ipb-university.png';

export default function ClientSection() {
  return (
    <section id="clients">
      <div className={`${LandingPageStyle.textAlignCenter}`}>
        <h1>Klien Kami</h1>
        <div className={`${LandingPageStyle.clientGrid}`}>
          <div className={`${LandingPageStyle.clientImageContainer}`}>
            <img src={BogorLogo} alt="Client" />
          </div>
          <div className={`${LandingPageStyle.clientImageContainer}`}>
            <img src={IPBLogo} alt="Client" />
          </div>
        </div>
      </div>
    </section>
  );
}
