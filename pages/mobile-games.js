import AboutStyles from '../styles/ServicePages.module.css';
import Nav from '../components/Nav';
import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import CorItem from '../components/gameDevProcessCor';
import ContactSection from '../components/ContactSection';
import Fade from 'react-reveal/Fade';

export default function mobileGames() {

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


    return (
        <>
            <GlobalStyle />
            <Nav
            logo={logo}
             />

            <main className="section">
                <section className={AboutStyles.section}>
                    <Fade left>
                    <div>
                        <img src="/image/Mask Group 17.png" className={AboutStyles.heroImg} />
                    </div>
                    </Fade>
                    <Fade bottom cascade delay={1000}>
                    <div className={AboutStyles.heroContent}>
                        <h4>Mobile games</h4>
                        <p>to reach your customers in an entirely new way</p>
                    </div>
                    </Fade>
                </section>

                <section className={AboutStyles.section}>
                    <div className={AboutStyles.mobileServices}>
                        <div className={AboutStyles.servicesWrapper}>
                            <Fade left>
                            <div className={AboutStyles.serviceItem}>
                                <div>
                                    <img src="/icons/game-development.png" />
                                </div>
                                <div>
                                    <h5>Mobile Games</h5>
                                    <p>ENGAGE YOUR AUDIENCE IN THE COMFORT OF THEIR HOME-THROUGH
                                        THEIR PHONE (IOS, ANDROID OR WEB)</p>
                                </div>
                            </div>
                            </Fade>
                            <Fade left delay={100}>
                            <div className={AboutStyles.serviceItem}>
                                <div>
                                    <img src="/icons/stadium.png" />
                                </div>
                                <div>
                                    <h5>EVENT-BASED GAMES</h5>
                                    <p>ADD A GAMIFIED, WOW ELEMENT TO YOUR EVENTS OR ACTIVATION</p>
                                </div>
                            </div>
                            </Fade>
                            <Fade left delay={200}>
                            <div className={AboutStyles.serviceItem}>
                                <div>
                                    <img src="/icons/virtual-reality-2.png" />
                                </div>
                                <div>
                                    <h5>VR/AR GAMES</h5>
                                    <p>LOOKING FOR SOMETHING A LITTLE MORE IMMERSIVE? FIND OUT MORE
                                        ABOUT OUR VR AND AR DESIGN AND DEVELOPMENT CAPABILITIES.</p>
                                </div>
                            </div>
                            </Fade>
                        </div>
                        <div className={AboutStyles.mobileImg}>
                            <Fade right>
                            <img src="/image/Mask Group 18.png" />
                            </Fade>
                        </div>
                    </div>
                </section>

                <section className={AboutStyles.section} id="themeSwap">
                    <div className={AboutStyles.devTitle}>
                        <Fade bottom cascade>
                        <h2>Our game development process</h2>
                        </Fade>
                    </div>
                    <div>
                        <Fade bottom delay={300}>
                        <Carousel
                            Previous="none"
                            fade="true"
                            nextLabel=""
                        >
                            <Carousel.Item>
                                <CorItem
                                    num="01"
                                    body="We meet with your team to discuss your marketing objectives, campaigns, ideal customer And any other relevant information."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <CorItem
                                    num="02"
                                    body="We’ll conceptualise 2-3 game ideas that suit your situation perfectly"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <CorItem
                                    num="03"
                                    body="Once you choose your favourite idea, we’ll start creating the prototype, allowing You to play a basic version of the game."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <CorItem
                                    num="04"
                                    body="After-which we’ll work on the mvp, filling in the design elements, music and sound as Well as improving the gameplay."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <CorItem
                                    num="05"
                                    body="The last step includes doing final touchups, game testing, quality assurance, and prepping For the relevant app stores."
                                />
                            </Carousel.Item>
                        </Carousel>
                        </Fade>
                    </div>
                </section>
                <section className={AboutStyles.section}>
                    <div className={AboutStyles.container}>
                        <Fade bottom>
                        <ContactSection
                            image="/image/wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png"
                            title="Don’t be afraid"
                            body="That we’re still building our portfolio. Get In touch to take advantage of our favourable Rates while we’re still feeling generous."
                            button="Brief us"
                        />
                        </Fade>
                    </div>
                </section>
            </main>
        </>
    )
}