import {Box, Center, Flex, HStack, Image, Text} from "@chakra-ui/react";
import informationJson from '../data/about.json';

const color = 'black';

const About = ({info}) => (
    <HStack position={'relative'} direction={['column','row']} align={'center'}>
        <Image ml={'15vh'} mt={'5vh'} boxSize={'50vh'} borderRadius={'full'} objectFit={'cover'} bgColor={'#f4c430'}  src={'/about.png'}/>
        <Flex flexDir={'column'} align={'center'}>
            <Text position={'absolute'} top={'-10vh'} left={'30vh'} fontSize={"6xl"} mt={'100px'} fontWeight={"bold"} w={'-webkit-fit-content'} color={color}>{info.name}</Text>
            <Text position={'absolute'} top={'10vh'} left={'50vh'} fontSize={"2xl"} p={'10px'} w={'-webkit-fit-content'} color={color}>{info.occupation}</Text>
            <Text position={'absolute'} top={'3vh'} left={'90vh'} w={'80vh'} fontSize={"2xl"} color={color} textAlign={"justify"}>{info.about}</Text>
        </Flex>

    </HStack>
);

export async function getStaticProps() {

    return {
        props: {
            info: informationJson

        }
    };
}

export default About;