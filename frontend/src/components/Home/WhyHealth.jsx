import { Box,Image, Text,Flex, Stack } from '@chakra-ui/react'

import React from 'react'

const WhyHealth = () => {
  return (
    <div style={{width:"80%" , margin:"auto", }}>
        <Text fontWeight="600"  fontSize={30} justifyContent={"flex-start"} marginBottom="20px">Why HealthKart ?</Text>
        <div>
            <Flex direction={['column', 'row']} justifyContent={['center', 'space-between']} alignItems="center" textAlign={"center"}>
                <Stack spacing={4} textAlign={['center', 'center']}>
                    <Image w={['60%', '35%']} margin={"auto"} src="https://img9.hkrtcdn.com/20791/normal_2079088_o.png" alt="wide" />
                    <Text fontWeight="500">Wide range of Nutritional products</Text>
                    <Text>One-stop fitness and health destination</Text>
                </Stack>
                <Stack spacing={4} textAlign={['center', 'center']}>
                    <Image w={['60%', '35%']} margin={"auto"} src="https://img3.hkrtcdn.com/20791/normal_2079092_o.png" alt="wide" />
                    <Text fontWeight="500">100% Original & Authentic</Text>
                    <Text>Tight control on sourcing and distribution</Text>
                </Stack>
                <Stack spacing={4} textAlign={['center', 'center']}>
                    <Image w={['60%', '35%']} margin={"auto"} src="https://img1.hkrtcdn.com/20791/normal_2079090_o.png" alt="wide" />
                    <Text fontWeight="500">Guide to Fit and Healthy Lifestyle</Text>
                    <Text>Your true partner in health & wellness journey</Text>
                </Stack>
            </Flex>

        </div>
      
    </div>
  )
}

export default WhyHealth
