import React from "react";
import { Center } from "@chakra-ui/react";
import Container from "./container";

const Section = (props) => {
    const { full, children, ...rest } = props;
    return (
        <Center as="section" {...rest} w="100%">
            {full ? children : <Container w={'100%'}>{children}</Container>}
        </Center>
    );
};

export default Section;