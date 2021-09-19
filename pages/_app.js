import { ChakraProvider, theme} from "@chakra-ui/react";
import Router from 'next/router';
import Layout from "components/layout";

Router.events.on('routeChangeComplete', () => {
    if (process.env.NODE_ENV !== 'production') {
        const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
        const timestamp = new Date().valueOf();
        els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
    }
});

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme} resetCSS={true}>
            <Layout>
                <Component {...pageProps} overflowY="auto" />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
