import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/ContactPage.module.css';
import ContactForm from "../components/ContactForm";
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export default function Contact() {

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
                <title>Contact | Anti Reality</title>
                <link rel="icon" href="/image/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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