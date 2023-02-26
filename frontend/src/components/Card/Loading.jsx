import React from 'react'
import {  SkeletonCircle, SkeletonText ,Box} from '@chakra-ui/react'
const Loading = () => {
  return (
    <Box padding='6' boxShadow='lg' bg='white'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={30} spacing='4' />
  </Box>
  )
}

export default Loading