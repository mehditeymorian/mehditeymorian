import {Box, Grid} from "@chakra-ui/react";
import React from "react";

const SkillLevel = ({color, level}) => (
    <Grid gridTemplateColumns={'15vh 1fr'} gridTemplateRows={'10px 1fr'}>
        <Box mt={1} gridArea={'1 / 1 / 2 / 2'} zIndex={1} borderRadius={'full'} bgColor={color} w={`${level*100}%`} maxW={'100%'} h={'10px'} />
        <Box mt={1} gridArea={'1 / 1 / 2 / 2'} borderRadius={'full'} bgColor={'gray.200'} w={'100%'} maxW={'100%'} h={'10px'} />
    </Grid>
);

export default SkillLevel;