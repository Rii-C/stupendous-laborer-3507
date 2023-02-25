import { Box, Button, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const HKprim = () => {
  return (
    <div>
        <Box>
            <Flex>
                <Stack spacing={4}>
                    <Flex justifyContent={"space-around"} gap={6} borderRadius={"15px"} padding={"20px"} backgroundColor={"#00B5B7"}>
                        <Stack w={"50%"} spacing={4}>
                            <Text fontSize={25} fontWeight={600}>HK Premium</Text>
                            <Text fontSize={16} fontWeight={200}>Earn extra HK Cash & Enjoy more discounts and deals than anyone else!</Text>
                            <Button width={"40%"} backgroundColor={"#EFFBFC"} cursor={'pointer'} borderRadius={"15px"}>Be a part now!</Button>
                        </Stack>
                        <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/subscribe.svg'/>
                    </Flex>
                    <Flex justifyContent={"space-around"} gap={6} borderRadius={"15px"} padding={"20px"}  backgroundColor={"#F7F7F7"} >
                        <Stack w={"40%"} spacing={4}>
                            <Text fontSize={25} fontWeight={600}>Refer & Earn</Text>
                            <Text fontSize={16} fontWeight={200}>Tell your friends to shop at HealthKart. They get Rs.200 off when they shop with us the 1st time & you get Rs. 200 off on your next order.</Text>
                            <Link >Refer now <Button width={"2%"} backgroundColor={"#00B5B7"} cursor={'pointer'} borderRadius={"100%"} color="white">&gt;</Button></Link>
                        </Stack>
                        <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/boy-refer.svg'/>
                    </Flex>
                </Stack>
                <Stack>
                <Flex justifyContent={"space-around"} gap={6} borderRadius={"15px"} padding={"20px"}  backgroundColor={"#F7F7F7"} >
                        <Stack w={"40%"} spacing={4}>
                            <Text fontSize={50} fontWeight={700}>Instant Assistance</Text>
                            <Text fontSize={16} fontWeight={200}>Wish to seek advise from nutritionists and dietitians?</Text>
                            <Button width={"40%"} backgroundColor={"#EFFBFC"} cursor={'pointer'} borderRadius={"15px"}>Book a Appointment</Button>
                            <Text fontSize={12} fontWeight={400}>*Get your customized nutrition and lifestyle plan</Text>
                        </Stack>
                        <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/physician.png'/>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
        
      
    </div>
  )
}

export default HKprim
