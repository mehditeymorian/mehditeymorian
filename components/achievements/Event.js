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
            <Box pt={3}>
                <Text fontWeight={'bold'}>{title}</Text>
                <Text align={'justify'} overflowWrap={'break-word'}>{description}</Text>
                <Flex mb={'20px'} mt={'5px'} flexWrap={'wrap'}>
                {tags.map(tag => <Badge variant={'solid'} colorScheme={tag.color} mb={'3px'} me={'10px'}>{tag.name}</Badge>)}
                </Flex>
            </Box>
        </Flex>
    )
};

export default Event;