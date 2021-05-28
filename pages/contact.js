import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/ContactPage.module.css';
import ContactForm from "../components/ContactForm";
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export async function getStaticProps(context) {
    const res = await fetch(`http://${process.env.VERCEL_URL}/api/seo/contact`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

export default function Contact({data}) {

    const logo = "/image/logo.png";

    const GlobalStyle = createGlobalStyle`
    html {
    --primary: #fff;
    --secondary: #160121;
    }
  `;

    return (
        <>
            <Head>
                <title>{data.title}</title>
                <link rel="icon" href="/image/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={data.metaDesc} />
                <meta name="keywords" content={data.metaKeywords} />
                <meta property="og:title" content={data.twitterTitle} />
                <meta property="og:description" content={data.twitterDescription} />
            </Head>
            <GlobalStyle />
            <Nav
                logo={logo}
            />
            <main className="section">
                <section className={styles.wrapper}>
                    <div>
                        <img src="/image/wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png" className={styles.img} />

                        <div className={styles.content}>
                            <h4>Don’t get in touch</h4>
                            <p>Unless you really want to innovate and leap ahead Of the competition</p>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </>

    )
}