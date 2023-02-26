import {
  Box,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import PlacedOrdersCard from "../../components/AdminComponents/PlacedOrdersCard";
import { getTotalPlacedOrdersData, updateTotalPlacedOrderDeliver, updateTotalPlacedOrderShipping } from "../../redux/Admin/Admin.action";

const PlacedOrders = () => {
  const [page, setPage] = useState(1);
  const { TotalPlacedOrderCount,
    TotalPlacedOrder } = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPlacedOrdersData(page));
  }, [page]);
// console.log(TotalPlacedOrderCount);
  const handleDeliver = (id) => {
    dispatch(updateTotalPlacedOrderDeliver(id)).then(()=>getTotalPlacedOrdersData(page));
  };
  const handleChangeByPage = (val) => {
    const newPage=page+val;
    setPage(newPage);
    getTotalPlacedOrdersData(newPage);
  };

  const handleFirstPage=()=>{
    getTotalPlacedOrdersData(setPage(1));
  }

  const handleLastPage=()=>{
  getTotalPlacedOrdersData(setPage(Math.ceil(TotalPlacedOrderCount/5)))  
  }
  const handleShipping = (id) => {
    dispatch(updateTotalPlacedOrderShipping(id)).then(()=>getTotalPlacedOrdersData(page));
  };
  return (
    <Box bg={"white"} width={"100%"}>
      <AdminNavbar />
      <Box mt={"90px"}>
        <HStack bg={"#025D84"} width={"100%"} >
          <Text color={"white"} px={5} py={1} fontWeight={"semibold"} >Total Placed Orders</Text>
        </HStack>
        <Box>
              {TotalPlacedOrder.length !== 0 &&
                TotalPlacedOrder?.map((el, i) => (
                  <PlacedOrdersCard
                   page={page}
                    key={i}
                    {...el}
                    ind={i}
                   handleDeliver={handleDeliver}
                   handleShipping={handleShipping}
                  />
                ))}
        </Box>
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
              isDisabled={page===Math.ceil(TotalPlacedOrderCount/5)}
            >
              Next
            </Button>
            <Button
              borderRadius={5}
              backgroundColor={"#28C2C4"}
              color={"#025D84"}
              border={"0px solid gray"}
              isDisabled={page===Math.ceil(TotalPlacedOrderCount/5)}
              onClick={handleLastPage}
              _hover={{bg:"white",color:"#28C2C4",border:"2px solid #28C2C4"}}
            >
              Last
            </Button>
          </HStack>
    </Box>
  );
};

export default PlacedOrders;
