import React from 'react'

import footerStyle from './footer.module.scss'

import WhatsappButton from '../button/whatsappButton'

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
                <div className={`${footerStyle.footerElement}`}>
                    <h3>Alamat</h3>
                    <div>
                        <p>Taman Dramaga Permai Jalan Rasamala Blok I.11 No.7 Ciampea, Bogor</p>
                    </div>
                </div>
                <div className={`${footerStyle.footerElement}`}>
                    <h3>Sosial Media</h3>
                    <div>
                        <p>Instagram : @cleansheet</p>
                        <p>Line : cleansheet</p>
                    </div>
                </div>
                <div className={`${footerStyle.footerElement}`}>
                    <h3>Jam Kerja</h3>
                    <div>
                        <p>Setiap Hari</p>
                        <p>24 jam</p>
                    </div>
                </div>
                <div className={`${footerStyle.footerElement}`}>
                    <h3>Kontak</h3>
                    <div>
                        <WhatsappButton />
                        <p>085882021749 (Whatsapp)</p>
                    </div>
                </div>
            </div>     
        </footer>
    )
}
