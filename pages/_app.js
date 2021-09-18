import {Center, ChakraProvider, theme} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
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
