import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import ContentCard from '../components/ContentCard';
import ICard from '../components/ICard';
import ContactSection from '../components/ContactSection';




export default function Home() {

  return (
    <>
      <Head>
        <title>Anti Reality</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
      </Head>

      <Nav />

      <main>
        <section className={styles.hero}>
          <div className={ styles.art }>
            <img src="/cube.png" />
            <img src="/cube.png" />
          </div>
          <div className={ styles.heroWrapper }>
            <h1>
              WE CRAFT EXPERIENTIAL CAMPAIGNS
            </h1>
            <h3>
              For brave South African companies
            </h3>
            <Link href="#pan">
              <button type="button" class="btn btn-outline-light">What the heck?</button>
            </Link>
            
            
          </div>
          <div className={ styles.pointerDown }>
            <Link href="/">
              <i className="fas fa-chevron-down"></i>
            </Link>
          </div>
        </section>

        <section className={ styles.section } id="#pan">
          <div className={ styles.container }>
            <div className={styles.cardGrid}>
            <ContentCard 
                  image="123Z_2101.w020.n001.946B.p15.946.png"
                  title="Experiential Marketing Campaigns"
                  body="Engage your audience like never before, with experiences that will stay with them for life."
                />
              <ContentCard 
                  image="1994.png"
                  title="Innovative Development Solutions"
                  body="Solve your most complex tech problems & bring your ideas to life with the power of XR."
                />
            </div>
          </div>
        </section>

        <section className={styles.section } >
          <div className={ styles.container }>
            <div className={ styles.iCardGrid }>
              <ICard 
                image="game-development.png"
                title="Game dev & design"
              />
              <ICard 
                image="virtual-reality-2.png"
                title="Virtual reality"
              />
              <ICard 
                image="virtual-reality.png"
                title="Augmented reality"
              />
              <ICard 
                image="Outline.png"
                title="Mixed reality"
              />
            </div>
          </div>
        </section>

        <section className={ styles.section } id="scrollSnap">
          <div className={ styles.titleMain }>
            <h4>Technologies We work with:</h4>
          </div>

          <div>
            <table className={ styles.techTable }>
              <tr>
                <td><img src="1_KV3lq1ssjHg4Jf1xSzUXaQ.png"/></td>
                <td><img src="1_lwof-6-Mi3LjJTuUEibUAg.png"/></td>
                <td><img src="250106.png"/></td>
                <td><img src="image-100115--1762514.png"/></td>
              </tr>
              <tr>
                <td><img src="logo-babylonjs-social-twitter.png"/></td>
                <td><img src="Screenshot 2021-04-01 at 14.20.05.png"/></td>
                <td><img src="Screenshot 2021-04-01 at 14.36.59.png"/></td>
                <td><img src="uPL5o2aF_400x400.png"/></td>
              </tr>
            </table>
          </div>
        </section>

        <section className={ styles.section }>
          <div className={ styles.container }>
            <ContactSection
              image="wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png"
              title="Don’t get in touch"
              body="Unless you really want to innovate and leap ahead Of the competition"
              button="You ready?"
            />
          </div>
        </section>
      </main>
    </>
  )
}
