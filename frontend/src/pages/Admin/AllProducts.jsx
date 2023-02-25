import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    useDisclosure,
  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Tablecard from "../../components/AdminComponents/TableCard";
import { deleteProductData, getProductData } from "../../redux/Admin/Admin.action";
 
  
  const AllProducts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [mrp, setMrp] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount]=useState('');
    const [id,setId]=useState('');
    const {Product} = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProductData());
    }, []);
  
    const handleDelete = (id) => {
      dispatch(deleteProductData(id)).then(()=>dispatch(getProductData()))
    };
  
    const handleUpdate=()=> {
    //   dispatch(updateMensData(id, price, discount, StrikePrice)).then(()=>{
    //      dispatch(getMensData());
    //     onClose();
    //   })
       
   };
  const handleOpen=(id)=>{
    setId(id);
    onOpen();
  }
    //console.log("Mens",MensData);
    return (
      <Box bg={"gray.100"} width={"100%"}>
        <AdminNavbar />
        <Box mt={"90px"} overflowX={"scroll"} >
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead bg={"#025D84"}>
                <Tr>
                  <Th color={"white"}>So No.</Th>
                  <Th color={"white"}>Products</Th>
                  {/* <Th color={"white"}>Title</Th>
                  <Th color={"white"}>Flavour</Th>
                  <Th color={"white"}>Category</Th>
                  <Th color={"white"}>MRP</Th>
                  <Th color={"white"}>Price</Th>
                  <Th color={"white"}>Discount</Th>
                  <Th color={"white"}>Stock</Th>
                  <Th color={"white"}>Edit</Th>
                  <Th color={"white"}>Delete</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {Product.length !== 0 &&
                  Product?.map((el, i) => (
                    <Tablecard
                      key={i}
                      {...el}
                      ind={i}
                      handleDelete={handleDelete}
                      handleOpen={handleOpen}
                    />
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Product Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>MRP</FormLabel>
                  <Input
                    type={"number"}
                    placeholder="Price"
                    value={mrp}
                    onChange={(e) => setMrp(e.target.value)}
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel>Price </FormLabel>
                  <Input
                    placeholder="Price"
                    type={"number"}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel>Discount</FormLabel>
                  <Input
                    placeholder="Discount"
                    type={"number"}
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </FormControl>
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
     </Modal>
        </Box>
      </Box>
    );
  };
  
  export default AllProducts;
  