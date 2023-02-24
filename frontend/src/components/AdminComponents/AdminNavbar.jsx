import {
  Box,
  Flex,
  Avatar,
  Image,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  AvatarBadge,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {BsFillBellFill } from "react-icons/bs";
import {RiAccountPinCircleFill,RiLogoutCircleFill} from "react-icons/ri";
import Logo from "../asset/webLogo.png";

const Links = [{path:'/admin/dashboard',name:'Dashboard'}, {path:'/admin/add',name:'Add-Products'}, {path:'/admin/products',name:'Products'},{path:'/admin/orders',name:'Orders'}];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={2}
    rounded={'md'}
    color={"#025D84"}
    fontWeight={'semibold'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#00B8B9', 'gray.700'),
      color:"white"
    }}
    href={children.path}>
    {children.name}
  </Link>
);

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} paddingY={2} boxShadow={"md"} zIndex={999} pos={"fixed"} top={0} left={0} right={0} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}  border={"0px solid red"} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon color={"#025D84"} /> : <HamburgerIcon color={"#025D84"} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} border={"0px solid black"} >
            <Box border={"0px solid red"} ><Image src={Logo} alt={"logo"}  width={"90px"}  /></Box>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}  border={"0px solid green"}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BsFillBellFill color='#257395' />}
        />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }>
                <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem> <Text textAlign={"center"} ml={5} >Sapna Sharma</Text></MenuItem>
                <MenuItem> <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<RiAccountPinCircleFill color='#257395' />}
        />Profile</MenuItem>
                <MenuDivider />
                <MenuItem> <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<RiLogoutCircleFill color='#257395' />}
        />Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}