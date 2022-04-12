import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Footer from '../components/Footer';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Component {...pageProps} id="outer-container" />
            <Footer />
        </>
    )
}

export default MyApp
