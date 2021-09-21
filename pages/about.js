import {Box, Center, Flex, HStack, Image, Text} from "@chakra-ui/react";
import informationJson from '../data/about.json';

const color = 'black';

const About = ({info}) => (
    <Flex justifyContent={'center'} flexWrap={'wrap'}>
        <Flex flexGrow={'1'} justify={'center'}>
        <Image
            m={{base:'10vw', sm: '5vw'}}
            sizes={''}
            boxSize={{ base: '100vw', sm: '90vw' , md:'60vw', lg: '30vw'}}
            borderRadius={'full'}
            objectFit={'cover'}
            bgColor={'#f4c430'}
            src={'/about.webp'}
            alt={'picture of me'}/>
        </Flex>

        <Flex flexDir={'column'} align={'center'}>
            <Text p={1}  fontSize={"6xl"} mt={'100px'} fontWeight={"bold"} w={'-webkit-fit-content'} color={color}>{info.name}</Text>
            <Text p={5}  fontSize={"2xl"} w={'-webkit-fit-content'} color={color}>{info.occupation}</Text>
            <Text p={5} w={{ base: '100vw', lg:'40vw'}} fontSize={"2xl"} color={color} textAlign={"justify"}>{info.about}</Text>
        </Flex>

    </Flex>
);

export async function getStaticProps() {

    return {
        props: {
            info: informationJson

        }
    };
}

export default About;