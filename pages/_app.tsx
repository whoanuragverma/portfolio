import '../styles/globals.css';
import Script from 'next/script';
function MyApp({ Component, pageProps }): JSX.Element {
    return (
        <>
            <Script
                strategy="lazyOnload"
                id="main"
                src="https://www.googletagmanager.com/gtag/js?id=G-QZR2HQVPER"
            />
            <Script strategy="lazyOnload" id="loader">
                {`window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-QZR2HQVPER');`}
            </Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
