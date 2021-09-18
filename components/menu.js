import {Box, Button, ButtonGroup, Flex, Spacer} from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icon';
import {FaMapPin} from "react-icons/fa";

import Link from 'next/link';
import {useRouter} from "next/router";

const color = 'black';
const menuItems = [
    {
        title: 'About',
        route: '/mehditeymorian/about',
    },
    {
        title: 'Timeline',
        route: '/mehditeymorian/timeline'
    },
    {
        title: 'Skills',
        route: '/mehditeymorian/skills'
    },
    {
        title: 'Projects',
        route: '/mehditeymorian/projects'
    }
];

const Menu = () => {
    const router = useRouter();
    console.log(router.route);

    return (
        <Box w={'10vw'} boxShadow={'2xl'}>
            <Flex ms={'30px'} me={'30px'} direction={'column'} align={'center'}>
                {menuItems.map((menuItem)=> (
                        <Link href={menuItem.route}>
                            <Button m={'10px'} colorScheme={'blackAlpha'} variant={'ghost'} color={color}
                                    leftIcon={router.route === menuItem.route ? <Icon as={FaMapPin} /> : undefined}
                                    borderBottom={router.route === menuItem.route ? '1px' : '0px'} borderBottomStyle={'solid'} borderBottomColor={'black'} borderBottomRadius={'0'}>{menuItem.title}</Button>
                        </Link>
                )
                )}

            </Flex>

        </Box>
    )
};

export default Menu;