import '../sass/main.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    console.log('Pasé por pages/_app.js');
    return <Component {...pageProps} />;
}
