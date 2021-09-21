import { Flex} from "@chakra-ui/react";
import timelineData from '../data/timeline.json';
import {PageSlideFade} from "components/ui/page-transitions";
import * as React from "react";
import TimeElement from "components/achievements/timeElement";

const Timeline = ({timeline}) => {

    return (
        <>
            <PageSlideFade>
                <Flex marginX={'5vw'} flexDir={'column'} overflowY={'scroll'} h={{base: 'full', md: '100vh'}} sx={{'::-webkit-scrollbar': {display: 'none'}}}>
                    {timeline.map(each=>  <TimeElement year={each.year} events={each.events} /> )}
                </Flex>
            </PageSlideFade>
        </>
    )
};

export const getStaticProps = async () => {

    return {
        props: {
            timeline: timelineData
        }
    }
}

export default Timeline;