import '../sass/main.scss';
//console.log('a Pasé por pages/_app.js');

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    //console.log('b Pasé por pages/_app.js');
    return <Component {...pageProps} />;
}
