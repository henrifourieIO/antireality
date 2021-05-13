import AboutStyles from '../styles/About.module.css';
import Nav from '../components/Nav';
import Carousel from 'react-bootstrap/Carousel'

export default function mobileGames() {

    return (
        <>
            <Nav />

            <main className={AboutStyles.main}>
                <section className={AboutStyles.section}>
                    <div>
                        <img src="Mask Group 17.png" className={AboutStyles.heroImg} />
                    </div>
                    <div className={AboutStyles.heroContent}>
                        <h4>Mobile games</h4>
                        <p>to reach your customers in an entirely new way</p>
                    </div>
                </section>

                <section className={AboutStyles.section}>
                    <div className={AboutStyles.mobileServices}>
                        <div className={AboutStyles.servicesWrapper}>
                            <div className={AboutStyles.serviceItem}>
                                <div>
                                    <img src="game-development.png" />
                                </div>
                                <div>
                                    <h5>Mobile Games</h5>
                                    <p>ENGAGE YOUR AUDIENCE IN THE COMFORT OF THEIR HOME-THROUGH
                                        THEIR PHONE (IOS, ANDROID OR WEB)</p>
                                </div>
                            </div>

                            <div className={AboutStyles.serviceItem}>
                                <div>
                                    <img src="stadium.svg" />
                                </div>
                                <div>
                                    <h5>EVENT-BASED GAMES</h5>
                                    <p>ADD A GAMIFIED, WOW ELEMENT TO YOUR EVENTS OR ACTIVATION</p>
                                </div>
                            </div>

                            <div className={AboutStyles.serviceItem}>
                                <div>
                                    <img src="virtual-reality-2.png" />
                                </div>
                                <div>
                                    <h5>VR/AR GAMES</h5>
                                    <p>LOOKING FOR SOMETHING A LITTLE MORE IMMERSIVE? FIND OUT MORE
                                        ABOUT OUR VR AND AR DESIGN AND DEVELOPMENT CAPABILITIES.</p>
                                </div>
                            </div>
                        </div>
                        <div className={AboutStyles.mobileImg}>
                            <img src="Mask Group 18.png" />
                        </div>
                    </div>
                </section>

                <section className={AboutStyles.section}>
                    <div className={AboutStyles.devTitle}>
                        <h2>Our game development process</h2>
                    </div>
                    <div>
                        <Carousel
                        Previous="none"
                        >
                            <Carousel.Item>
                                <div className={AboutStyles.calList}>
                                    <div>
                                        <span className={AboutStyles.calNum}>01</span>
                                    </div>
                                    <div>
                                        <p className={AboutStyles.calBody}>
                                            We meet with your team to discuss your marketing objectives, 
                                            campaigns, ideal customer And any other relevant information.
                                        </p>
                                    </div>
                                </div> 
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
            </main>
        </>
    )
}