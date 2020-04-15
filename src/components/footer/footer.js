import React from 'react';

import FooterStyle from './footer.module.scss';
import WhatsappButton from '../Buttons/WhatsappButton';

import LogoCSAbu from '../../assets/logo_cs_abu.png';

export default function Footer() {
  return (
    <footer className={`${FooterStyle['footer-container']}`}>
      <div className={FooterStyle['footer-content']}>
        <div className={FooterStyle['footer-logo']}>
          <img src={LogoCSAbu} alt="Logo CleanSheet Abu" />
        </div>
        <div className={FooterStyle['footer-element']}>
          <h3>Alamat</h3>
          <div className={FooterStyle['footer-caption']}>
            <p>Taman Dramaga Permai Jalan Rasamala Blok I.11 No.7 Ciampea, Bogor</p>
          </div>
        </div>
        <div className={FooterStyle['footer-element']}>
          <h3>Sosial Media</h3>
          <div className={FooterStyle['footer-caption']}>
            <p>Instagram : @cleansheet</p>
            <p>Line : cleansheet</p>
          </div>
        </div>
        <div className={FooterStyle['footer-element']}>
          <h3>Jam Kerja</h3>
          <div className={FooterStyle['footer-caption']}>
            <p>Setiap Hari</p>
            <p>24 jam</p>
          </div>
        </div>
        <div className={FooterStyle['footer-element']}>
          <h3>Kontak</h3>
          <div className={FooterStyle['footer-caption']}>
            <WhatsappButton />
            <p>085882021749 (Whatsapp)</p>
          </div>
        </div>
      </div>
      <div className={FooterStyle['footer-copyright']}>
        <p>&copy; Cleansheet Indonesia 2020</p>
      </div>
    </footer>
  );
}
