import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import timelineData from '../data/timeline.json';
import {PageSlideFade} from "components/ui/page-transitions";
import * as React from "react";
import TimeElement from "components/achievements/timeElement";

const Timeline = ({timeline}) => {

    return (
        <PageSlideFade>
                <Box overflowY={'scroll'} h={'100vh'} w={'100vh'} sx={{
                    '::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}>
                    {timeline.map(each=>  <TimeElement year={each.year} events={each.events} /> )}
                </Box>
        </PageSlideFade>
    )
};

export const getServerSideProps = async () => {

    return {
        props: {
            timeline: timelineData
        }
    }
}

export default Timeline;