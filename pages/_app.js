import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';


function MyApp({ Component, pageProps }) {


    function changeTheme() {
        var createStyle ="";
        if (theme === false) {
            return createStyle = createGlobalStyle
            `
                html {
                    --primary: #fff;
                    --secondary: #160121;
                }
            `
        } else if (theme === true) {
            return createStyle = createGlobalStyle`
            html {
                --primary: #160121;
                --secondary: #fff;
            }
        `
        }

    }

    

    const [theme, setTheme] = useState(createGlobalStyle`
    html {
        --primary: #fff;
        --secondary: #160121;
        transition: 0.7s;
    }
`)

    const listenScrollEvent = (event) => {
        

        const scrollSnap = document.getElementById('scrollSnap');
        const snapPostion = scrollSnap.offsetTop - 300


    if(window.innerWidth > 375) {
        if (window.scrollY < snapPostion) {
            setTheme(createGlobalStyle`
            html {
                --primary: #fff;
                --secondary: #160121;
                transition: 0.7s;
            }
        `)
        } else if (window.scrollY > snapPostion) {
            setTheme(createGlobalStyle`
            html {
                --primary: #160121;
                --secondary: #fff;
                transition: 0.7s;
            }
        `)
        } 
    } 
    
    }

    const GlobalStyle = theme;

    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    ) 
    
    
}

export default MyApp
