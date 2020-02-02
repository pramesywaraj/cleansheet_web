import React from 'react';

import footerStyle from './footer.module.scss';


export default function Footer() {
    return (
        <footer className={`${footerStyle.footer}`}>
            <div className={
                `${footerStyle.footerContent} 
                ${footerStyle.gridContainer}
                `
            }>
                <div>
                    <img src={require('../../assets/logo_cs_abu.png')} alt="Logo CleanSheet Abu"/>
                </div>
                <div>
                    <h2>Kontak/Alamat</h2>
                    <p>Taman Dramaga Permai Jalan Rasamala Blok I.11 No.7 Ciampea, Bogor</p>
                    <p>085882021749 (Whatsapp)</p>
                </div>
                <div>
                    <h2>Sosial Media</h2>
                    <p>Instagram : @cleansheet</p>
                    <p>Line : cleansheet</p>
                </div>
                <div>
                    <h2>Jam Kerja</h2>
                    <p>Setiap Hari</p>
                    <p>24 jam</p>
                </div>
            </div>     
        </footer>
    )
}
