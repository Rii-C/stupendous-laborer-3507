import React from 'react'
import {Box,Flex,Image, HStack,Text, VStack,Icon,Show, Divider} from "@chakra-ui/react"
import logo from "../asset/webLogo.png"
import {BsCart, BsMap} from "react-icons/bs"
import {BiMap} from "react-icons/bi"
import {MdPayment} from "react-icons/md"


const CardNavbar = () => {

  return (
   
   
    <Flex justify="center" alignItems="center" m={5} h="100px" mt={5} >
    <Box >
    <Image src={logo} alt="logo" w={{base:"50%",md:"30%"}}/>
    </Box>
  <Box>
    <Flex justifyContent="space-around" gap={10} >
    <VStack>
    <Box boxShadow='sm' p='2' rounded='3xl' bg='blackAlpha.200' ><BsCart size={20}/>  </Box>
    
   <Show above='sm'> <Text size="xs">Cart</Text></Show>
    </VStack>
 
    <VStack>
    <Box boxShadow='sm' p='2' rounded='3xl' bg='blackAlpha.200' > <BiMap size={20}/>  </Box>
   
    <Show above='sm'><Text size="xs">Address</Text></Show>
    </VStack>
    
    <VStack>
    <Box boxShadow='sm' p='2' rounded='3xl' bg='blackAlpha.200' > <MdPayment size={20}/>   </Box>
    
    <Show above='sm'><Text size="xs">Payment</Text></Show> 
    </VStack>
    
    </Flex>
    </Box>
   
  
    </Flex>
  
  
  )
}

export default CardNavbar