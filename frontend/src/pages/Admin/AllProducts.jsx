import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Tablecard from "../../components/AdminComponents/TableCard";
import {
  deleteProductData,
  getProductData,
  updateProductData,
} from "../../redux/Admin/Admin.action";

const AllProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage,setTotalPage]=useState(0);
  const { Product } = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData(page,setTotalPage));
  }, [page]);

  const handleDelete = (id) => {
    dispatch(deleteProductData(id)).then(() => dispatch(getProductData(page,setTotalPage)));
  };
  const handleChangeByPage = (val) => {
    const newPage=page+val;
    setPage(newPage);
    getProductData(newPage);
  };

  const handleFirstPage=()=>{
    getProductData(setPage(1));
  }

  const handleLastPage=()=>{
  getProductData(setPage(Math.ceil(totalPage/5)))  
  }
  const handleUpdate = () => {
    dispatch(updateProductData(id, mrp, price, discount)).then(() => {
      dispatch(getProductData(page,setTotalPage));
      onClose();
      setDiscount("");
      setPrice("");
      setMrp("");
    });
  };
  const handleOpen = (id) => {
    setId(id);
    onOpen();
  };
  return (
    <Box bg={"white"} width={"100%"}>
      <AdminNavbar />
      <Box mt={"90px"}>
        <HStack bg={"#025D84"} width={"100%"} >
          <Text color={"white"} px={5} py={1} fontWeight={"semibold"} >Products</Text>
        </HStack>
        <Box>
              {Product.length !== 0 &&
                Product?.map((el, i) => (
                  <Tablecard
                   page={page}
                    key={i}
                    {...el}
                    ind={i}
                    handleDelete={handleDelete}
                    handleOpen={handleOpen}
                  />
                ))}
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
      <HStack
            border={"0px solid pink"}
            justifyContent={"center"}
            spacing={2}
            mb={5}
            mt={5}
          >
            <Button
              borderRadius={5}
              backgroundColor={"#28C2C4"}
              border={"0px solid gray"}
              color={"#025D84"}
              isDisabled={page===1}
              _hover={{bg:"white",color:"#28C2C4",border:"2px solid #28C2C4"}}
              onClick={handleFirstPage}
            >
              First
            </Button>
            <Button
              onClick={() => handleChangeByPage(-1)}
              borderRadius={5}
              color={"#025D84"}
              backgroundColor={"#28C2C4"}
              border={"0px solid gray"}
              isDisabled={page===1}
              _hover={{bg:"white",color:"#28C2C4",border:"2px solid #28C2C4"}}
            >
              Previous
            </Button>
            <Button
              borderRadius={5}
              backgroundColor={"white"}
              color={"#025D84"}
              border={"2px solid #025D84"}
            >
              {page}
            </Button>
            <Button
              onClick={() => handleChangeByPage(1)}
              borderRadius={5}
              color={"#025D84"}
              backgroundColor={"#28C2C4"}
              border={"0px solid gray"}
              _hover={{bg:"white",color:"#28C2C4",border:"2px solid #28C2C4"}}
              isDisabled={page===Math.ceil(totalPage/5)}
            >
              Next
            </Button>
            <Button
              borderRadius={5}
              backgroundColor={"#28C2C4"}
              color={"#025D84"}
              border={"0px solid gray"}
              isDisabled={page===Math.ceil(totalPage/5)}
              onClick={handleLastPage}
              _hover={{bg:"white",color:"#28C2C4",border:"2px solid #28C2C4"}}
            >
              Last
            </Button>
          </HStack>
    </Box>
  );
};

export default AllProducts;
