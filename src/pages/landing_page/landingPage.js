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
                ${landingPageStyle.sectionMargin}
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
                <div className={`${landingPageStyle.servicesButtonMargin5}`}>
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
    

    return (
        <section 
            className={`
                ${landingPageStyle.sectionMargin}
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
            </div>
        </section>
    )
}

const ClientSection = () => {
    
    return (
        <section id="clients">
            <div className={`${landingPageStyle.textAlignCenter}`}>
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
            </main>
        </>
    )
}
