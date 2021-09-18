import React from 'react';
import {
    Box,
    Icon,
    VStack,
    HStack,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorModeValue,
    SimpleGrid,
    Center
} from "@chakra-ui/react";
import skillsArray from '../data/skills.json';
import Header from "components/layout/header";

import {container, PageSlideFade} from "components/ui/page-transitions";
import {MotionBox} from "components/ui/motion";
import {useState} from "react";
import SkillCard from "components/layout/skill-card";
import {AiTwotoneThunderbolt} from "react-icons/ai";

const Skills = ({skills, types}) => {
    const [skillsList, setSkillsList] = useState([]);

    React.useEffect(() => {
        setSkillsList(skills);
    }, []);

    const filterSkills = tab => {
        if (tab.length) setSkillsList(skills.filter(skill => skill['type'].includes(tab)));
        else setSkillsList(skills);
    };

    return (
        <Box w={'90vw'} h={'100vh'} pt={12}>
            <PageSlideFade>
                <VStack spacing={8} align={"center"}>
                        <VStack>
                            <Header mt={0} mb={1}>Tech Stack</Header>
                            <Text
                                fontSize={"xl"}
                                color={useColorModeValue("gray.500", "gray.200")}
                                maxW="lg"
                                textAlign="center">
                                A list of my favorite tools and technologies that I use on a
                                regular basis.
                            </Text>
                        </VStack>
                        <Tabs variant="soft-rounded" colorScheme="blue" align="center" >
                            <TabList display="flex" flexWrap="wrap">
                                {types.map(eachType=> (
                                    <Tab
                                        bg={useColorModeValue("gray.100", "gray.800")}
                                        color={useColorModeValue("gray.600", "gray.500")}
                                        _selected={{
                                            color: "green.800",
                                            bg: "green.100"
                                        }}
                                        mr={2}
                                        mt={2}
                                        onClick={() => filterSkills(eachType === 'All' ? "" : eachType)}>
                                        <HStack spacing={1}>
                                            <Icon as={AiTwotoneThunderbolt}/>
                                            <Text>{eachType}</Text>
                                        </HStack>
                                    </Tab>
                                ))}

                            </TabList>
                            <TabPanels >
                                {types.map(()=> (
                                    <TabPanel px={0}>
                                        <MotionBox
                                            variants={container}
                                            initial="hidden"
                                            animate="visible">
                                            <SimpleGrid columns={[1, 1, 3]} spacing={4} mt={8}>
                                                {skillsList.map((tool, index) => (
                                                    <SkillCard
                                                        key={index}
                                                        name={tool.name}
                                                        description={tool.description}
                                                        image={tool.image}
                                                        // platform={"web"}
                                                        link={tool.link}
                                                        level={tool.level}
                                                    />
                                                ))}
                                            </SimpleGrid>
                                        </MotionBox>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </Tabs>
                </VStack>
            </PageSlideFade>
        </Box>
    );
};

export function getServerSideProps() {
    const skillsTypes = skillsArray.map(each=> each['type']).flat().filter((v,i,a)=> a.indexOf(v) === i);
    skillsTypes.unshift('All');
    return {
        props: {
            skills: skillsArray,
            types: skillsTypes,
        }
    };
}

export default Skills;