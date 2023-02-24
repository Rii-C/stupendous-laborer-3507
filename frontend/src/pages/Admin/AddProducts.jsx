import { Box, Flex, Heading, Stack, useColorModeValue, FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/react';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import AdminNavbar from '../../components/AdminComponents/AdminNavbar';
import { postProductData } from '../../redux/Admin/Admin.action';

const description={
  product_details:[],
  product_information:""
}

const initialState={
  name: "",
  image: [],
  stock: 10,
  quantity:1,
  premium: 0,
  mrp: 0 ,
  price: 0,
  discount: 0,
  product_benefits:"",
  reviews: 0,
  rating: 0,
  flavour: "Unflavoured",
  description:description,
  category: "" 
}

const AddProducts = () => {
  const [productDetails,setProductDetails] = useState(initialState);
  const [productDescription,setProductDescription] = useState(description);
  const dispatch = useDispatch();
  const handelSubmit=()=>{
   dispatch(postProductData(productDetails));
   setProductDetails(initialState);
   setProductDescription(description);
  }
  //console.log(productDetails.description.product_details);
  return (
    <Box>
        <AdminNavbar/>
        <Box mt={5} >
        <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} width={'40%'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>ADD PRODUCTS</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4} >
              <FormControl id="title">
                <FormLabel>Title</FormLabel>
                <Input type="text" placeholder='Enter Title' value={productDetails.name}
          onChange={(e)=>setProductDetails({...productDetails,name:e.target.value})} />
              </FormControl>
              <FormControl id="flavour">
                <FormLabel>Flavour</FormLabel>
                <Input type="text" placeholder='Enter Flavour' value={productDetails.flavour}
          onChange={(e)=> setProductDetails({...productDetails,flavour:e.target.value})} />
              </FormControl>
              <FormControl mt="2%">
        <FormLabel htmlFor="category"  fontWeight={500}>
          Category
        </FormLabel>
        <Select
          id="category"
          placeholder="Select Category"
          value={productDetails.category} onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})} >
          <option value={"Omega 3"} >Omega 3</option>
          <option value={"Moisturizer"} >Moisturizer</option>
          <option value={"Amla"} >Amla</option>
          <option value={"Protein Shakes"} >Protein Shakes</option>
          <option value={"Flaxseed Oil"} >Flaxseed Oil</option>
          <option value={"Fish Oil"} >Fish Oil</option>
          <option value={"Biotin"} >Biotin</option>
          <option value={"Speciality Shampoo"} >Speciality Shampoo</option>
          <option value={"Whey Proteins"} >Whey Proteins</option>
          <option value={"Pre-Workout"} >Pre-Workout</option>
          <option value={"Raw Whey Proteins"} >Raw Whey Proteins</option>
          <option value={"Oats"} >Oats</option>
          <option value={"Peanut Butter"} >Peanut Butter</option>
          <option value={"Muesli"} >Muesli</option>
          <option value={"Protein Bars"} >Protein Bars</option>
          <option value={"Mass Gainers"} >Mass Gainers</option>
          <option value={"Collagen"} >Collagen</option>
          <option value={"Whey Protein Isolate"} >Whey Protein Isolate</option>
          <option value={"L-Arginine"} >L-Arginine</option>
          <option value={"Multivitamins - General"} >Multivitamins - General</option>
        </Select>
      </FormControl>

              <FormControl id="image">
                <FormLabel>Image</FormLabel>
                <Input type="URL" placeholder='Enter Image URL'value={productDetails.image}
          onChange={(e)=>setProductDetails({...productDetails,image:e.target.value})} />
              </FormControl>
              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Input type="number" placeholder='Enter Price' value={productDetails.price}
          onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})}/>
              </FormControl>
              <FormControl id="discount">
                <FormLabel>Discount</FormLabel>
                <Input type="number" placeholder='Enter Discount' value={productDetails.discount}
          onChange={(e)=>setProductDetails({...productDetails,discount:e.target.value})} />
              </FormControl>
              <FormControl id="mrp">
                <FormLabel>MRP</FormLabel>
                <Input type="number" placeholder='Enter MRP' value={productDetails.mrp}
          onChange={(e)=>setProductDetails({...productDetails,mrp:e.target.value})} />
              </FormControl>
              <FormControl id="product_benefits">
                <FormLabel>Product Benefits</FormLabel>
                <Input type="text" placeholder='Enter Product Benefits' value={productDetails.product_benefits}
          onChange={(e)=>setProductDetails({...productDetails,product_benefits:e.target.value})} />
              </FormControl>
              <FormControl id="product_description">
                <FormLabel>Product Description</FormLabel>
                <Input type="text" placeholder='Enter Product Description' value={productDescription.product_details}
          onChange={(e)=>{
            setProductDescription({...productDescription,product_details:e.target.value})
            //console.log(productDescription);
            setProductDetails({...productDetails,description:productDescription})
          }} />
              </FormControl>
               <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handelSubmit} >
                  ADD
                </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    </Box>
  )
}

export default AddProducts