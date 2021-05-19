import Nav from '../components/Nav';
import Styles from '../styles/ServicePages.module.css';
import ContentCard from '../components/ContentCard';
import ICard from '../components/ICard';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import ContactSection from '../components/ContactSection';
import Fade from 'react-reveal/Fade';

export default function mixedReality() {

    const [logo, setLogo] = useState("/image/logo-dark.png")

    const [theme, setTheme] = useState(createGlobalStyle`
    html {
        --primary: #160121;
        --secondary: #fff;
    }
    `)

    const listenScrollEvent = (event) => {
        const scrollSnap = document.getElementById('themeSwap');
        const snapPostion = scrollSnap.offsetTop - 500;
        if (window.innerWidth > 375) {
            if (window.scrollY < snapPostion) {
                setTheme(createGlobalStyle`
        html {
            --primary: #160121;
            --secondary: #fff;
        }
    `)
    setLogo("/image/logo-dark.png")
            } else if (window.scrollY > snapPostion) {
                setTheme(createGlobalStyle`
        html {
            --primary: #fff;
            --secondary: #160121;
        }
    `)
    setLogo("/image/logo.png")
            }
        }
    }
    const GlobalStyle = theme;

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const margin = {
        marginTop: '3em',
        background: 'red',
    }

    return (
        <>
            <GlobalStyle />
            <Nav 
            logo={logo}
            />

            <main className="section">
                <section className={Styles.section}>
                    <Fade left>
                    <div>
                        <img src="/image/Mask Group 1777.png" className={Styles.heroImg} />
                    </div>
                    </Fade>
                    <Fade cascade bottom delay={1000}>
                    <div className={Styles.heroContent}>
                        <h4>MIXED REALITY</h4>
                        <p>FOR AN IMMERSIVE, UNFORGETTABLE EXPERIENCE</p>
                    </div>
                    </Fade>
                </section>

                <section className={Styles.section}>
                    <div className={Styles.container}>
                        <div className={Styles.cardGrid}>
                            <Fade bottom>
                            <ContentCard
                                image="/image/19362672.png"
                                title="MIXED reality Experiences & games"
                                body="We craft unforgettable MR games and experiences, 
                                helping brands engage their audience- like never before!"
                            />
                            </Fade>
                            <Fade bottom delay={300}>
                            <ContentCard
                                image="/image/male-female-architects-wearing-augmented-reality-headsets-work-with-3d-city-model_301430-503.png"
                                title="MIXED reality Applications & Solutions"
                                body="It’s not all fun & games, we also conceptualise, 
                                design and develop MR solutions for companies. Helping them 
                                save money or increase work efficiency."
                            />
                            </Fade>
                        </div>
                    </div>
                </section>

                <section className={Styles.section} id="themeSwap">
                    <div className={Styles.container}>
                        <div className={Styles.devTitle}>
                            <Fade cascade bottom>
                            <h4>Industries we service</h4>
                            </Fade>
                        </div>
                        <div className={Styles.iCardGrid}>
                        <Fade bottom>
                            <ICard
                                image="/image/market.png"
                                title="Retail"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/bank.png"
                                title="Finance & banking"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/online-shop.png"
                                title="E-commerce"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/Outline.png"
                                title="healthcare"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/Outline.png"
                                title="Engineering"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/video.png"
                                title="Entertainment"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/mortarboard.png"
                                title="Education"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/house.png"
                                title="Real estate"
                            />
                            </Fade>
                            <Fade bottom>
                            <ICard
                                image="/image/interactive.png"
                                title="Multimedia"
                            />
                            </Fade>
                        </div>
                    </div>
                </section>

                <section className={Styles.section}>
                    <div className={Styles.container}>
                        <div className={Styles.devTitle}>
                            <Fade cascade bottom>
                            <h4>Our capabilities</h4>
                            </Fade>
                        </div>
                        <div className={Styles.cardGrid}>
                            <Fade bottom>
                            <ContentCard
                                image="/image/shutterstock_776789038 [Converted]-01.png"
                                title="Native vr apps For headsets & Mobile"
                            />
                            </Fade>
                            <Fade bottom delay={300}>
                            <ContentCard
                                image="/image/180.png"
                                title="Web-based vr For mobile"
                            />
                            </Fade>
                        </div>
                    </div>
                </section>

                <section className={Styles.section}>
                    <div className={Styles.container}>
                        <Fade bottom>
                        <ContactSection
                            image="/image/wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png"
                            title="Don’t be afraid"
                            body="That we’re still building our portfolio. Get In touch to 
                            take advantage of our favourable Rates while we’re still feeling 
                            generous."
                            button="Brief us"
                        />
                        </Fade>
                    </div>
                </section>
            </main>
        </>
    )
}