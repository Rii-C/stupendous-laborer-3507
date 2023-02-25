import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Download = () => {
  return (
    <div style={{margin:"auto", width:"80%"}}>
      <Box margin="100px 0px">
        <Flex>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/download-App-IMG.svg" alt="mobile"/>
            <Stack spacing={3}>
                <Text fontWeight={400} fontSize={50}>Download the</Text>
                <Text fontWeight={700} fontSize={50}>Healthkart Mobile app</Text>
                <Flex  gap={9}  borderRadius="8px" padding={8}>
                    <Image width={"10%"} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-cart.svg' alt='kart'/>
                    <Stack>
                        <Text fontWeight={400} fontSize={20} >Easier, Faster Shopping</Text>
                        <Text fontWeight={200} fontSize={17} >Get Authentic supplements, Fitness solutions, and a healthy lifestyle</Text>
                    </Stack>
                </Flex>
                <Flex gap={9}  borderRadius="8px" padding={8}>
                    <Image width={"10%"} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-watch.svg' alt='kart'/>
                    <Stack>
                        <Text fontWeight={400} fontSize={20} >Fuel your Fitness Goals</Text>
                        <Text fontWeight={200} fontSize={17} >Complete challenges to build habit & win HK cash</Text>
                    </Stack>
                </Flex>
                <Flex gap={9}  borderRadius="8px" padding={8}>
                    <Image width={"10%"} src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-tick.svg' alt='kart'/>
                    <Stack>
                        <Text fontWeight={400} fontSize={20} >Get Exclusive App Only Benefits</Text>
                        <Text fontWeight={200} fontSize={17} >Extra discounts, offers and cashbacks</Text>
                    </Stack>
                </Flex>
                <Flex justifyContent={"space-evenly"}>
                    <Image width={"40%"} src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/google-badge.svg" alt="google"/>
                    <Image width={"40%"} src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/app-store-new.svg" alt="apple"/>
                </Flex>
            </Stack>
        </Flex>
      </Box>
    </div>
  )
}

export default Download
