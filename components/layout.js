import Menu from "components/menu";
import {Box, Center, HStack} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <HStack
            // bgImg={'./bg.jpg'} bgSize={"cover"}
            h={'100vh'}
            >
            <Menu/>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.div
                    key={router.route}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                        {children}
                </motion.div>
            </AnimatePresence>
        </HStack>
    )
};

export default Layout;