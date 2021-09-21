import {
    Box,
    Button,
    Flex,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    useDisclosure,
    IconButton
} from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icon';
import {FaMapPin, FaHamburger} from "react-icons/fa";

import Link from 'next/link';
import {useRouter} from "next/router";

const color = 'black';
const menuItems = [
    {
        title: 'About',
        route: '/about',
    },
    {
        title: 'Timeline',
        route: '/timeline'
    },
    {
        title: 'Skills',
        route: '/skills'
    },
    {
        title: 'Projects',
        route: '/projects'
    }
];

const Menu = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();

    const menuContent = (
        <Flex ms={'30px'} me={'30px'} direction={'column'} align={'center'}>
            {menuItems.map((menuItem) => (
                    <Link href={menuItem.route}>
                        <Button m={'10px'} colorScheme={'blackAlpha'} variant={'ghost'} color={color}
                                leftIcon={router.route === menuItem.route ? <Icon as={FaMapPin}/> : undefined}
                                borderBottom={router.route === menuItem.route ? '1px' : '0px'} borderBottomStyle={'solid'}
                                borderBottomColor={'black'} borderBottomRadius={'0'}>{menuItem.title}</Button>
                    </Link>
                )
            )}
        </Flex>
    );

    return (
        <>
            <Box display={{ base: 'none', md:'block'}} boxShadow={'base'} h={'-webkit-fit-content'}>
                {menuContent}
            </Box>

            <Button m={12} display={{ base: 'block', md:'none'}} onClick={onOpen} leftIcon={<Icon as={FaHamburger} />}>Menu</Button>

            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                    <DrawerBody>
                        {menuContent}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
};

export default Menu;