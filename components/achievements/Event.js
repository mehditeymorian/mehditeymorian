import {Box, Circle, Flex, Text, Image, useColorModeValue, Center, Badge} from "@chakra-ui/react";
import React from "react";

const Event = ({title, description, icon, tags, year, month, skipTrail}) => {
    const color = useColorModeValue("gray.700", "gray.500");

    return (
        <Flex minH={20}>
            <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
                <Circle
                    size={12}
                    bg={useColorModeValue("gray.600", "gray.500")}
                    opacity={useColorModeValue(0.07, 0.15)}
                    sx={{}}

                />
                <Box
                    as={Image}
                    src={icon}
                    objectFit={'cover'}
                    borderRadius="full"
                    size="1.25rem"
                    // bgColor={color}
                    pos="absolute"

                />
                {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
            </Flex>
            <Box pt={3} >
                {/*todo: add the content here*/}
                <Text fontWeight={'bold'}>{title}</Text>
                <Text w={'70vh'} align={'justify'}>{description}</Text>
                <Box mb={'20px'}>
                {tags.map(tag => <Badge variant={'solid'} colorScheme={tag.color} me={'10px'}>{tag.name}</Badge>)}
                </Box>
            </Box>
        </Flex>
    )
};

export default Event;