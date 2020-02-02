import React from 'react';

import Header from '../../components/header/header';
import PrimaryButton from '../../components/button/primaryButton';
import OutlinedButton from '../../components/button/outlinedButton';
import ProductCard from '../../components/cards/productCard';

import landingPageStyle from './landingPage.module.scss';

import logoCleansheet from '../../assets/logo_cs.png';
import landingPageMainImage from '../../assets/landingpage_main_image.svg';

// services image
import cleaningServices from '../../assets/cleaning_services.svg';
import laundryWashing from '../../assets/laundry_washing.svg';
import environmentCleaning from '../../assets/env_cleaning.svg';


const HeaderSection = () => {
    const goToProductPage = () => {
        console.log("Directly into Product");
    }
    
    return (
        <section id="mainHeader">
            <div 
                className={`
                    ${landingPageStyle.flexboxContainer} 
                    ${landingPageStyle.fullPageHeight}
                `}
            >
                <div>
                    <img 
                        alt="Cleansheet Logo" 
                        src={logoCleansheet}
                    />
                    <div 
                        className={`
                            ${landingPageStyle.captionLayout} 
                            ${landingPageStyle.mainCaption}
                        `}
                    >
                        <p>Start up kebersihan modern berbasis Sociotechnopreneur</p>
                    </div>
                    <div>
                        <PrimaryButton 
                            type='primary'
                            clickAction={goToProductPage} 
                            label="Pesan" 
                        />
                    </div>
                </div>
                <div className={`${landingPageStyle.rightAlign}`}>
                    <img 
                        className={`${landingPageStyle.mainDecorationImage}`}
                        alt="Cleansheet decoration 1" 
                        src={landingPageMainImage}
                    />
                </div>
            </div>
        </section>
    )
}

const ServiceSection = () => {
    const goToServicePage = () => {
        console.log("Directly into Service Page");
    }

    return (
        <section 
            id="services"
            className={`
                ${landingPageStyle.sectionGap}
            `}

        >
            <div className={`
                ${landingPageStyle.serviceSection} 
                ${landingPageStyle.textAlignCenter}
            `}>
                <h1>Layanan Kami</h1>
                <div className={`
                    ${landingPageStyle.servicesContainer} 
                    ${landingPageStyle.gridContainer}
                `}>
                    <div>
                        <img 
                            alt="Layanan Kebersihan"
                            src={cleaningServices}    
                        />
                        <h4>Layanan Kebersihan</h4>
                        <div className={`
                            ${landingPageStyle.servicesCaption} 
                        `}>
                            <p>Cleansheet dapat membersihkan rumah dan kosan apapun sebelum atau sehabis acara sampai pindahan.</p>
                        </div>
                    </div>
                    <div>
                        <img 
                            alt="Layanan Cuci Barang"
                            src={laundryWashing}    
                        />
                        <h4>Layanan Cuci Barang</h4>
                        <div className={`
                            ${landingPageStyle.servicesCaption} 
                        `}>
                            <p>Cleansheet dapat membersihkan barang apapun dari sepatu, tas, karpet, helm sampai kendaraan.</p>
                        </div>
                    </div>
                    <div>
                        <img 
                            alt="Layanan Penanganan Lingkungan"
                            src={environmentCleaning}    
                        />
                        <h4>Layanan Penanganan Lingkungan</h4>
                        <div className={`
                            ${landingPageStyle.servicesCaption} 
                        `}>
                            <p>Cleansheet dapat mengatasi permasalahan lingkungan seperti sampah dan lain sebagainya.</p>
                        </div>
                    </div>
                </div>
                <div className={`${landingPageStyle.buttonMargin5}`}>
                    <OutlinedButton 
                        clickAction={goToServicePage} 
                        label="Selengkapnya"
                    />
                </div>
            </div>
        </section>
    )
}

const ProductSection = () => {
    const goToProductPage = () => {
        console.log('Go to product page');
    }

    return (
        <section 
            className={`
                ${landingPageStyle.sectionGap}
        `}>
            <div className={`
                ${landingPageStyle.textAlignCenter}
            `}>
                <h1>Produk Kami</h1>
                <p>Dapatkan produk unggulan kami dalam bidang kebersihan.</p>
                <div className={`${landingPageStyle.productGrid}`}>
                    <ProductCard
                        imgSrc={``}
                        productName='Sapu Kebersihan'
                        price='15.000'
                    />
                    <ProductCard
                        imgSrc={``}
                        productName='Sapu Kebersihan'
                        price='15.000'
                    />
                    <ProductCard
                        imgSrc={``}
                        productName='Sapu Kebersihan'
                        price='15.000'
                    />
                    <ProductCard
                        imgSrc={``}
                        productName='Sapu Kebersihan'
                        price='15.000'
                    />
                </div>
                <div className={`${landingPageStyle.buttonMargin5}`}>
                    <OutlinedButton 
                        clickAction={goToProductPage} 
                        label="Selengkapnya"
                    />
                </div>
            </div>
        </section>
    )
}

const ClientSection = () => {
    
    return (
        <section 
            id="clients"
        >
            <div className={`${landingPageStyle.textAlignCenter}`}>
                <h1>Klien Kami</h1>
                <div className={`${landingPageStyle.clientGrid}`}>
                    <div className={`${landingPageStyle.clientImageContainer}`}>
                        <img 
                            src={require('../../assets/logo-bogor.png')} 
                            alt="Client"
                        />
                    </div>
                    <div className={`${landingPageStyle.clientImageContainer}`}>
                        <img 
                            src={require('../../assets/ipb-university.png')} 
                            alt="Client"
                        />
                    </div>
                    <div className={`${landingPageStyle.clientImageContainer}`}>
                        <img 
                            src={require('../../assets/logo-bogor.png')} 
                            alt="Client"
                        />
                    </div>
                    <div className={`${landingPageStyle.clientImageContainer}`}>
                        <img 
                            src={require('../../assets/ipb-university.png')} 
                            alt="Client"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
    
}

const JoinCleansheetWorkerSection = () => {
    const goToJoinCleansheetWorker = () => {
        console.log('Go');
    }
    
    return (
        <section id="joinCleansheetWorker">
            <div className={`${landingPageStyle.joinWorkerContainer}`}>
                <div className={`${landingPageStyle.joinWorkerContent}`}>
                    <div className={`${landingPageStyle.joinWorkerImageContainer}`}>
                        <img 
                            src={require('../../assets/cleansheet-owner.png')}
                            alt="Cleansheet Owner"
                        />
                    </div>
                    <div className={`${landingPageStyle.joinWorkerTextContainer}`}>
                        <h1>Gabung CleanSheet</h1>
                        <h3>Yuk daftarkan dirimu menjadi bagian dari CleanSheet</h3>
                        <div className={`${landingPageStyle.buttonMargin5}`}>
                            <PrimaryButton 
                                type='white'
                                clickAction={goToJoinCleansheetWorker} 
                                label="Gabung Sekarang"
                            />
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}

const JoinCleansheetPartner = () => {
    const goToJoinCleansheetPartner = () => {
        console.log('Go');
    }
    
    return (
        <section id="joinPartner">
            <div className={`${landingPageStyle.joinPartnerContainer}`}>
                <h1>Gabung Mitra</h1>
            </div>
        </section>
    )
}

export default function LandingPage() {

    return (
        <>
            <Header />
            <main role="main">
                <HeaderSection />
                <ServiceSection />
                <ProductSection />
                <ClientSection />
                <JoinCleansheetWorkerSection />
                <JoinCleansheetPartner />
            </main>
        </>
    )
}
