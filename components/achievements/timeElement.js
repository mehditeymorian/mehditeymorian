import {Box, Circle, Flex, Heading, Link, LinkProps, Text, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";
import Event from "components/achievements/Event";


const TimeElement = ({year,events}) => {

    return (
        <Box>
            <Heading fontSize="2xl" fontWeight="600" my={5}>{year}</Heading>
            <Box>
                {events.map((event, index)=> <Event {...event} skipTrail={index+1 === events.length}/>)}
            </Box>
        </Box>
    );
};

export default TimeElement;