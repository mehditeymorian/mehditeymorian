import * as React from "react";
import {
    VStack,
    Text,
    useColorModeValue,
    HStack,
    IconButton,
    Tooltip, Center, Box,
    Flex
} from "@chakra-ui/react";
import {PageSlideFade} from "components/ui/page-transitions";
import Header from "components/layout/header";
import {RiSignalTowerLine} from "react-icons/ri";
import LiveData from "components/open-source/live-data";
import repositories from "data/repositories.json";
import useSound from "use-sound";
import PageLayout from "components/layout/pageLayout";

const TURQUOISE = "#06b6d4";

const iconProps = {
    variant: "ghost",
    size: "md",
    isRound: true
};

const Projects = ({repositories}) => {
    const [activeTab, setActiveTab] = React.useState("live");

    const [play] = useSound("/assets/audios/lightswitch.mp3", {
        volume: 0.05,
        sprite: {
            on: [0, 300],
            off: [500, 300]
        }
    });

    const handleClick = type => {
        activeTab === "live" ? play({id: "on"}) : play({id: "off"});
        setActiveTab(type);
    };

    return (
        <PageLayout title="Open-source" keywords="A list of open source projects">
            <PageSlideFade>
                <VStack  h={'100vh'} pt={10} align={'center'}>
                    <HStack justifyContent={"center"}>
                        <Header underlineColor={TURQUOISE} mt={0} mb={0}>Open Source</Header>
                            <Tooltip hasArrow label="Live github repos" placement="top">
                                <IconButton
                                    aria-label={"live"}
                                    size="md"
                                    colorScheme={"linkedin"}
                                    icon={<RiSignalTowerLine/>}
                                    isActive={activeTab === "live"}
                                    onClick={() => handleClick("live")}
                                    {...iconProps}
                                />
                            </Tooltip>
                    </HStack>
                    <Text
                        color={useColorModeValue("gray.500", "gray.200")}
                        textAlign="left">
                        This page lists some of the open source repositories I have
                        published or contributed to.
                    </Text>
                    <LiveData/>
                </VStack>
            </PageSlideFade>
        </PageLayout>
    );
};

export function getStaticProps() {
    return {
        props: {
            repositories
        }
    };
}

export default Projects;
