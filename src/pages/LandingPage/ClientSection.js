import React from 'react';

import LandingPageStyle from './landingPage.module.scss';

import ClientImages from '../../misc/clientImages';

export default function ClientSection() {
  return (
    <section id="clients" className="section-gap">
      <div className="text-center">
        <h1>Klien dan Kerjasama Kami</h1>
        <div className="grid-container">
          {ClientImages.map(image => (
            <div key={image.id} className={`${LandingPageStyle['client-image-container']}`}>
              <img
                src={require(`../../assets/clientImages/${image.src}`)}
                alt={image.alt}
                title={image.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
