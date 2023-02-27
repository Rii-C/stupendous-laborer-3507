import {
  Box,
  //Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import PlacedOrdersCard from "../../components/AdminComponents/PlacedOrdersCard";
import { deleteTotalPlacedOrderData, getTotalPlacedOrdersData, updateTotalPlacedOrderDeliver, updateTotalPlacedOrderShipping } from "../../redux/Admin/Admin.action";

const PlacedOrders = () => {
  const { TotalPlacedOrderCount,
    TotalPlacedOrder } = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPlacedOrdersData());
  }, []);

  const handleDeliver = (id) => {
    dispatch(updateTotalPlacedOrderDeliver(id)).then(()=>dispatch(getTotalPlacedOrdersData()));
  };

  const handleDelete = (id)=>{
     dispatch(deleteTotalPlacedOrderData(id)).then(()=>dispatch(getTotalPlacedOrdersData()));
  };
  const handleShipping = (id) => {
dispatch(updateTotalPlacedOrderShipping(id)).then(()=>dispatch(getTotalPlacedOrdersData()));
  };

  TotalPlacedOrder.reverse();
  return (
    <Box bg={"white"} width={"100%"}>
      <AdminNavbar />
      <Box mt={"90px"}>
        <HStack bg={"#025D84"} width={"100%"} >
          <Text color={"white"} px={5} py={1} fontWeight={"semibold"} >TOTAL PLACED ORDERS : {TotalPlacedOrderCount} </Text>
        </HStack>
        <Box>
              {TotalPlacedOrder.length !== 0 &&
                TotalPlacedOrder?.map((el, i) => (
                  <PlacedOrdersCard
                    key={i}
                    {...el}
                    ind={i}
                   handleDelete={handleDelete}
                   handleDeliver={handleDeliver}
                   handleShipping={handleShipping}
                  />
                ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PlacedOrders;
