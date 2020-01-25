import React from 'react';

import Header from '../../components/header/header';
import PrimaryButton from '../../components/button/primaryButton';
import landingPageStyle from './landingPage.module.scss';

import logoCleansheet from '../../assets/logo_cs.png';
import landingPageMainImage from '../../assets/landingpage_main_image.svg';

export default function LandingPage() {
    const orderAction = () => {
        console.log("Directly into Product");
    }

    return (
        <>
            <Header />
            <main role="main">
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
                                    clickAction={orderAction} 
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
                <section id="services">
                    <div className={`${landingPageStyle.serviceSection}`}>
                        <h1>Layanan Kami</h1>
                        <div className={`${landingPageStyle.gridContainer}`}>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
