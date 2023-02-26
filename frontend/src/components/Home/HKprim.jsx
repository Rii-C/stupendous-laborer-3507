import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Link, Navigate} from 'react-router-dom'


const HKprim = () => {
  return (
    <div style={{margin:"auto", width:"80%"}}>
        <Box margin={"70px 0px"}>
            <Flex justifyContent={"flex-start"} gap={5}>
                <Stack alignItems={"flex-end"} spacing={4}>
                    <Flex justifyContent={"space-around"} borderRadius={"15px"} padding={"20px 40px"} backgroundColor={"#00B5B7"}>
                        <Stack w={"50%"} spacing={4}>
                            <Text fontSize={25} fontWeight={600}>HK Premium</Text>
                            <Text fontSize={16} fontWeight={200}>Earn extra HK Cash & Enjoy more discounts and deals than anyone else!</Text>
                            <Link to="/products/wheyproteins">
                                <Button width={"40%"} backgroundColor={"#EFFBFC"} cursor={'pointer'} borderRadius={"15px"}>Be a part now!</Button>
                            </Link>
                        </Stack>
                        <Image width={"25%"} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/subscribe.svg'/>
                    </Flex>
                    <Flex justifyContent={"space-around"} borderRadius={"15px"} padding={"20px 0px 0px 0px"}  backgroundColor={"#F7F7F7"} >
                        <Stack w={"40%"} spacing={4}>
                            <Text fontSize={25} fontWeight={600}>Refer & Earn</Text>
                            <Text fontSize={16} fontWeight={200}>Tell your friends to shop at HealthKart. They get Rs.200 off when they shop with us the 1st time & you get Rs. 200 off on your next order.</Text>
                            <Link to="/products/wheyproteins" >Refer now <Button width={"2%"} backgroundColor={"#00B5B7"} cursor={'pointer'} borderRadius={"100%"} color="white">&gt;</Button></Link>
                        </Stack>
                        <Image w={"30%"} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/boy-refer.svg' objectFit={"cover"}/>
                    </Flex>
                </Stack>
                <Stack >
                    <Flex justifyContent={"flex-start"} borderRadius={"15px"} padding={"20px 20px 0px 30px"}  backgroundColor={"#F7F7F7"} >
                            <Stack w={"50%"} spacing={3}>
                                <Text fontSize={40} fontWeight={500}>Instant Assistance</Text>
                                <Text fontSize={16} fontWeight={200}>Wish to seek advise from nutritionists and dietitians?</Text>
                                <Link to="/login">
                                    <Button color={"white"} backgroundColor={"#00B5B7"} cursor={'pointer'} borderRadius={"15px"} onClick={()=>{<Navigate to="/login"/>}}>Book a Appointment</Button>
                                </Link>
                                
                                <Text fontSize={12} fontWeight={400}>*Get your customized nutrition and lifestyle plan</Text>
                            </Stack>
                            <Image w={"90%"} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/physician.png' objectFit={"cover"} alt="physician"/>
                        </Flex>
                </Stack>
            </Flex>
        </Box>
      
    </div>
    

  )
}

export default HKprim
