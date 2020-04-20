import React from 'react';

import FooterStyle from './footer.module.scss';
import WhatsappButton from '../Buttons/WhatsappButton';

import LogoCleansheet from '../../assets/logo_cs.png';

export default function Footer() {
  return (
    <footer className={`${FooterStyle['footer-container']}`}>
      <div className={FooterStyle['footer-content']}>
        <div className={FooterStyle['footer-logo']}>
          <img src={LogoCleansheet} alt="Logo CleanSheet Abu" />
        </div>
        <div className={FooterStyle['footer-element']}>
          <h3>Alamat</h3>
          <div className={FooterStyle['footer-caption']}>
            <p>Jalan Alternatif Babakan Tengah Gg Masjid Al-Wustho No.55 Dramaga, Bogor</p>
          </div>
        </div>
        <div className={FooterStyle['footer-element']}>
          <h3>Sosial Media</h3>
          <div className={FooterStyle['footer-caption']}>
            <p>Instagram : @cleansheet_id</p>
            <p>Line : cleansheet.id</p>
            <p>Youtube : Cleansheet Indonesia</p>
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
            <p>+62 812-9798-4971 (Whatsapp)</p>
          </div>
        </div>
      </div>
      <div className={FooterStyle['footer-copyright']}>
        <p>&copy; PT. Cita Indonesia Bersih 2020</p>
      </div>
    </footer>
  );
}
