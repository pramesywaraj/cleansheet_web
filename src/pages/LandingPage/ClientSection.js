import React from 'react';

import LandingPageStyle from './landingPage.module.scss';

import ClientImages from '../../misc/clientImages';
import images from '../../assets/clientImages/dompet-dhuafa.svg';

export default function ClientSection() {
  return (
    <section id="clients" className="section-gap">
      <div className="text-center">
        <h1>Klien Kami</h1>
        <div className="grid-container">
          {ClientImages.map(image => {
            console.log(images);
            return (
              <div key={image.id} className={`${LandingPageStyle['client-image-container']}`}>
                <img src={require('../../assets/clientImages/' + image.src)} alt={image.alt} title={image.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
