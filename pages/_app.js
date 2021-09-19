import { ChakraProvider, theme} from "@chakra-ui/react";
import Router from 'next/router';
import Layout from "components/layout";


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
