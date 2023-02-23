import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from '../../components/AdminComponents/AdminNavbar'

const AddProducts = () => {
  return (
    <Box>
        <AdminNavbar/>
        <Box>
        <Text textAlign={"center"} >Add Products</Text>
      </Box>
    </Box>
  )
}

export default AddProducts