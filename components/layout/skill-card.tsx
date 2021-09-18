import React from "react";
import {
    HStack,
    VStack,
    Text,
    useColorModeValue,
    Box,
    Link,
    Image,
    Skeleton,
    Progress, Stack, Flex, Grid
} from "@chakra-ui/react";
import {usePalette} from "react-palette";
import {MotionBox} from "../ui/motion";
import {item} from "../ui/page-transitions";
import NextLink from 'next/link';
import {useLinkColor} from "components/ui/theme";
import SkillLevel from "components/skills/skillLevel";
import LazyImage from "components/ui/lazy-image";

const SkillCard = ({name, image, link, description, level}) => {
    const linkColor = useLinkColor();
    const {data, loading} = usePalette(image);

    return (
        <MotionBox variants={item}>
            <MotionBox whileHover={{y: -5}}>
                <NextLink href={link} passHref>
                    <Link isExternal>
                        <HStack
                            p={4}
                            bg={useColorModeValue("white", "gray.800")}
                            rounded="xl"
                            borderWidth="1px"
                            borderColor={useColorModeValue("gray.100", "gray.700")}
                            w="100%"
                            textAlign="left"
                            align="start"
                            spacing={4}
                            _hover={{shadow: "md"}}>
                            <Box
                                rounded="lg"
                                p={2}
                                position="relative"
                                overflow="hidden"
                                lineHeight={0}
                                boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)">
                                <Box
                                    bg={data.lightVibrant}
                                    position="absolute"
                                    top={0}
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    opacity={0.25}/>
                                {loading ? (
                                    <Skeleton height={26} width={26} rounded="md"/>
                                ) : (
                                    <LazyImage
                                        src={image}
                                        height={26}
                                        width={26}
                                        layout="fixed"
                                        rounded="md" blurHash={'LEHV6nWB2yk8pyo0adR*.7kCMdnj'}/>
                                )}
                            </Box>
                            <VStack
                                align="start"
                                justify="flex-start"
                                spacing={1}
                                maxW="lg"
                                h="100%">
                                <VStack spacing={0} align="start" flexGrow={1}>
                                    <Text fontWeight="bold" fontSize="md" noOfLines={2} color={linkColor}>{name}</Text>
                                    <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.200")}>{description}</Text>
                                    <SkillLevel color={data.lightVibrant} level={level} />
                                </VStack>
                            </VStack>
                        </HStack>
                    </Link>
                </NextLink>
            </MotionBox>
        </MotionBox>
    );
};

export default SkillCard;
