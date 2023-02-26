import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Flex,
  useColorModeValue,
  Center,
  Image,
  color,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import {FaTwitter,FaFacebook,FaYoutube, FaInstagram, FaLinkedin, FaPinterest} from "react-icons/fa"
import weblogo from "../asset/webLogo.png"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color='white'>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
    fontFamily={'sans-serif'}
      bg={useColorModeValue('#0D2122', '#0D2122')}
      color={useColorModeValue('white', 'white')}>
      <Container as={Stack} maxW={'8xl'} py={5} >
      <Box  >
        <Image 
        src={weblogo}
        alt="weblogo" 
        w="10%"
        objectFit="cover"/>
        </Box>
        <Box display={'Flex'} >
        <SimpleGrid columns={{ base: 1, sm: 5, md: 6 }} spacing={9} fontSize="sm">
            
          <Stack align={'flex-start'} textAlign={'left'} color={'#A9B0B1'}>
            <ListHeader>HealthKart</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Contact Us</Link>          
            <Link href={'#'}>Refer & Earn</Link>
            <Link href={'#'}>Loyalty Program</Link>
            <Link href={'#'}>Blogs, Videos & More</Link>
            <Link href={'#'}>Brand Directory</Link>
            <Link href={'#'}>Authenticity Guaranteed</Link>
            <Link href={'#'}>Careers</Link>
          </Stack>
          <Stack align={'flex-start'} textAlign={'left'} color={'#A9B0B1'}>
            <ListHeader>Brands</ListHeader>
            <Link href={'#'}>MuscleBlaze</Link>
            <Link href={'#'}>Fit Foods</Link>
            <Link href={'#'}>HK Vitals</Link>
            <Link href={'#'}>TrueBasics</Link>
            <Link href={'#'}>Gritzo</Link>
            <Link href={'#'}>bGREEN</Link>
          </Stack>
          <Stack align={'flex-start'} textAlign={'left'} color={'#A9B0B1'} >
            <ListHeader>Health & Fitness</ListHeader>
            <Link href={'#'}>Product Reviews</Link>
            <Link href={'#'}>Sports Nutrition</Link>
            <Link href={'#'}>Vitamins & Supplements</Link>
            <Link href={'#'}>Ayurveda & Herbs</Link>
            <Link href={'#'}>Health Food & Drinks</Link>
            <Link href={'#'}>Fitness</Link>
            <Link href={'#'}>Wellness</Link>
          </Stack>
          <Stack align={'flex-start'} textAlign={'left'} color={'#A9B0B1'}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={'#'}>My Account</Link>
            <Link href={'#'}>Track Your Order</Link>
            <Link href={'#'}>Store Locator</Link>
            <Link href={'#'}>HK Cash</Link>
            <Link href={'#'}>HK Coupons</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Sell On HealthKart</Link>
          </Stack>
          <Stack align={'flex-start'} textAlign={'left'} color={'#A9B0B1'}>
            <ListHeader>Contact Us</ListHeader>
            <Link href={'#'}>care@healthkart.com</Link>
            <Link href={'#'}>0124-4616444</Link>
            <Link href={'#'}>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana</Link>
          </Stack>
        </SimpleGrid>
          <Box justifyContent="center" textAlign={'left'} backgroundColor ={'white'} color={'black'} width={'120%'} padding={'20px'} borderRadius={'7px'} lineHeight={'30px'}  >
            <Text fontWeight="500">Subscribe</Text>
            <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={'text'}
                placeholder='Enter your email'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={''} bg={'#00B5B7'}>&gt;</Button>
            </InputRightElement>
            </InputGroup>
            <Text fontSize='xs'> Get newsletters and exclusive offers</Text>
            <Flex gap={2}  mt="2">
            <Image 
            src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/Return.png'
            alt='14days'
            w="30%"
            objectFit="cover"/>
            <Image 
            src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/authenticity.png'
            alt='14days'
            w="30%"
            objectFit="cover"/>
            <Image 
            src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/secure.png'
            alt='14days'
            w="30%"
            objectFit="cover"/>
            </Flex>
            <Stack spacing={0}>
          <Box>
            <Text fontWeight="300">Follow Us On</Text>
          </Box>
          <Box>
          <Flex gap={6} cursor="pointer" > 
           <FaTwitter size="8%"/>
           <FaFacebook size="8%"/>
           <FaYoutube size="8%"/> 
           <FaInstagram size="8%"/>
           <FaLinkedin size="8%"/>
           <FaPinterest size="8%"/> 
           </Flex>
           <Stack>
          <Text fontWeight="300">Download Our App</Text>
          <Flex  gap="4" mt="2" cursor="pointer">
            <Image
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt="Google Play Store"
              w="45%"
              objectFit="cover"
            />
            <Image
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt="Apple Store"
              objectFit="cover"
              w="45%"
            />
          </Flex>
        </Stack>
          </Box>
        </Stack>

          </Box>
          </Box>

          <Box>
            <Flex p={6} gap='3'>
                <Image 
                src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay1.svg'
                objectFit="cover"
                alt='banks'
                sizes='10%'
                />
                <Image 
                src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay2.svg'
                objectFit="cover"
                alt='banks'
                sizes='10%'
                />
                <Image 
                src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay3.svg'
                objectFit="cover"
                alt='banks'
                sizes='10%'
                />
                <Image 
                src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay4.svg'
                objectFit="cover"
                alt='banks'
                sizes='10%'
                />
                <Image 
                src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay5.svg'
                objectFit="cover"
                alt='banks'
                sizes='10%'
                />
                <Image 
                src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay6.svg'
                objectFit="cover"
                alt='banks'
                sizes='10%'
                />
            </Flex>
          </Box>

        {/**------------------------------------------------------------------------------ */}
        <Center
        mb="2"
        borderBottom="1px"
        borderBottomColor="whiteAlpha.800"
        p="1"
      >
        <Text fontSize="14px" w="90%" m="auto" textAlign="center"></Text>
      </Center>

      <Flex fontSize={"sm"} justifyContent={'space-between'} color={'#A9B0B1'}>
        <Text>Copyright © 2023, HealthKart.com, or its affiliates</Text>
        <SimpleGrid column={{base:1, md:8, sm:8}} spacing={8} >
            <Flex  gap={5}>
                <Text>Terms & Conditons  </Text>|
                <Text>Delivery Policy  </Text>|
                <Text>Privacy Policy </Text>|
                <Text>Disclaimer  </Text>|
                <Text>Return Policy </Text>
            </Flex>
        </SimpleGrid>
      </Flex>
      </Container>
      
    </Box>
    

  );
}