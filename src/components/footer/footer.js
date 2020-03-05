import React from 'react';

import FooterStyle from './footer.module.scss';
import WhatsappButton from '../Buttons/WhatsappButton';

import LogoCSAbu from '../../assets/logo_cs_abu.png';

export default function Footer() {
  return (
    <footer className={`${FooterStyle.footer}`}>
      <div
        className={`
          ${FooterStyle.footerContent} 
          ${FooterStyle.gridContainer}
        `}
      >
        <div>
          <img src={LogoCSAbu} alt="Logo CleanSheet Abu" />
        </div>
        <div className={`${FooterStyle.footerElement}`}>
          <h3>Alamat</h3>
          <div>
            <p>Taman Dramaga Permai Jalan Rasamala Blok I.11 No.7 Ciampea, Bogor</p>
          </div>
        </div>
        <div className={`${FooterStyle.footerElement}`}>
          <h3>Sosial Media</h3>
          <div>
            <p>Instagram : @cleansheet</p>
            <p>Line : cleansheet</p>
          </div>
        </div>
        <div className={`${FooterStyle.footerElement}`}>
          <h3>Jam Kerja</h3>
          <div>
            <p>Setiap Hari</p>
            <p>24 jam</p>
          </div>
        </div>
        <div className={`${FooterStyle.footerElement}`}>
          <h3>Kontak</h3>
          <div>
            <WhatsappButton />
            <p>085882021749 (Whatsapp)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
