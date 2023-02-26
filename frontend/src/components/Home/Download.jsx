import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'

import React from 'react'

const Download = () => {
  return (
    <div style={{margin:"auto", width:"80%"}}>
  <Box margin="50px 0px">
    <Flex direction={{base: "column", md: "row"}}>
      <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/download-App-IMG.svg" alt="mobile" margin={{base: "auto", md: "0"}}/>
      <Stack spacing={3} marginLeft={{md: "50px"}}>
        <Text fontWeight={400} fontSize={{base: "36px", md: "50px"}}>Download the</Text>
        <Text fontWeight={700} fontSize={{base: "36px", md: "50px"}}>Healthkart Mobile app</Text>
        <Flex direction={{base: "column", md: "row"}}  gap={9}  borderRadius="8px" padding={8}>
          <Image width={{base: "20%", md: "10%"}} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-cart.svg' alt='kart'/>
          <Stack>
            <Text fontWeight={400} fontSize={{base: "18px", md: "20px"}} >Easier, Faster Shopping</Text>
            <Text fontWeight={200} fontSize={{base: "14px", md: "17px"}} >Get Authentic supplements, Fitness solutions, and a healthy lifestyle</Text>
          </Stack>
        </Flex>
        <Flex direction={{base: "column", md: "row"}} gap={9}  borderRadius="8px" padding={8}>
          <Image width={{base: "20%", md: "10%"}} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-watch.svg' alt='kart'/>
          <Stack>
            <Text fontWeight={400} fontSize={{base: "18px", md: "20px"}} >Fuel your Fitness Goals</Text>
            <Text fontWeight={200} fontSize={{base: "14px", md: "17px"}} >Complete challenges to build habit & win HK cash</Text>
          </Stack>
        </Flex>
        <Flex direction={{base: "column", md: "row"}} gap={9}  borderRadius="8px" padding={8}>
          <Image width={{base: "20%", md: "10%"}} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-tick.svg' alt='kart'/>
          <Stack>
            <Text fontWeight={400} fontSize={{base: "18px", md: "20px"}} >Get Exclusive App Only Benefits</Text>
            <Text fontWeight={200} fontSize={{base: "14px", md: "17px"}} >Extra discounts, offers and cashbacks</Text>
          </Stack>
        </Flex>
        <Flex justifyContent="center" marginTop={{base: "30px", md: "50px"}}>
          <Image width={{base: "40%", md: "20%"}} src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/google-badge.svg" alt="google"/>
          <Image width={{base: "40%", md: "20%"}} src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/app-store-new.svg" alt="apple" marginLeft={{base: "0px", md: "20px"}}/>
        </Flex>
      </Stack>
    </Flex>
  </Box>
</div>


  )
}

export default Download
