import React from 'react'
import {Box,Flex,Image, HStack,Text, VStack} from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import {BsCart} from "react-icons/bs"
import {BiMap} from "react-icons/bi"
import {MdPayment} from "react-icons/md"


const CardNavbar = () => {
  return (
   
    <Box  h={50} mb={30}  >
    <Flex justify="center" >
    <Box>
    <Image src={logo} alt="logo" w={{base:"50%",md:"30%"}}/>
    </Box>
  
    <HStack gap={{base:"3%",sm:"15%"}} alignItems="center">
    <VStack>
    <Box boxShadow='xs' p='2' rounded='3xl' bg='blackAlpha.200'><BsCart size={15}/></Box>
    
    <Text>Cart</Text>
    </VStack>
    <VStack>
    <Box boxShadow='xs' p='2' rounded='3xl' bg='blackAlpha.200'> <BiMap size={15}/></Box>
   
    <Text>Address</Text>
    </VStack>
    <VStack>
    <Box boxShadow='xs' p='2' rounded='3xl' bg='blackAlpha.200'><MdPayment size={15}/></Box>
    
    <Text>Payment</Text>
    </VStack>
    
    </HStack>
  
    </Flex>
    </Box>
  
  )
}

export default CardNavbar