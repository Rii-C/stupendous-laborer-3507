import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import {
  getProductData,
  getTotalPlacedOrdersData,
  getUserData,
} from "../../redux/Admin/Admin.action";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { Users, TotalCount, TotalPlacedOrderCount } = useSelector(
    (store) => store.adminReducer
  );
  useEffect(() => {
    dispatch(getProductData());
    dispatch(getTotalPlacedOrdersData());
    dispatch(getUserData());
  }, []);
  //console.log(TotalCount,Users.length,TotalPlacedOrderCount);
  return (
    <Box>
      <AdminNavbar />
      <Flex
        flexDirection={"column"}
        mt={100}
        display={{ sm: "none", md: "none",lg:"none", base: "flex" }}
      >
        <Stack
          border={"0px solid black"}
          justifyContent={"space-between"}
          px={5}
        >
          <Box>
          <Chart
            type="pie"
            height={400}
            series={[TotalCount, TotalPlacedOrderCount, 20, Users.length]}
            options={{
              noData: { text: "Unavailable" },
              stroke: {
                lineCap: "round",
              },
              plotOptions: {
                pie: {
                  expandOnClick: true,
                },
              },
              radialBar: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
              },
              labels: [
                "TOTAL-PRODUCTS",
                "TOTAL-PLACED-ORDERS",
                "CATEGORIES",
                "TOTAL-USERS",
              ],
            }}
          ></Chart>
        </Box>
          <HStack bg={"#26B0AB"} boxShadow={"lg"} py={5} px={5} borderRadius={10}>
            <Text fontSize={30} color={"#025D84"} fontWeight={"semibold"} textAlign={"center"}>
              Total Products : {TotalCount ? TotalCount : 0}
            </Text>
          </HStack>
          <HStack bg={"#26B0AB"} boxShadow={"lg"} py={5} px={5} borderRadius={10}>
            <Text color={"#025D84"} fontSize={30} fontWeight={"semibold"} textAlign={"center"}>
              Total Placed Orders :{" "}
              {TotalPlacedOrderCount ? TotalPlacedOrderCount : 0}
            </Text>
          </HStack>
          <HStack bg={"#26B0AB"} boxShadow={"lg"} py={5} px={5} borderRadius={10}>
            <Text color={"#025D84"} fontSize={30} fontWeight={"semibold"} textAlign={"center"}>
              Total Users : {Users.length ? Users.length : 0}
            </Text>
          </HStack>
        </Stack>
      </Flex>
      <Flex
        display={{ base: "none", sm: "block", md: "block",lg:"block" }}
        mt={100}
        border={"0px solid black"}
      >
        <HStack
          border={"0px solid black"}
          justifyContent={"space-between"}
          px={5}
        >
          <HStack bg={"#26B0AB"} boxShadow={"lg"} py={10} px={5} borderRadius={10}>
            <Heading color={"#025D84"} >Total Products : {TotalCount ? TotalCount : 0}</Heading>
          </HStack>
          <HStack boxShadow={"lg"} bg={"#26B0AB"} py={10} px={5} borderRadius={10}>
            <Heading color={"#025D84"} >
              Total Placed Orders :{" "}
              {TotalPlacedOrderCount ? TotalPlacedOrderCount : 0}
            </Heading>
          </HStack>
          <HStack boxShadow={"lg"} bg={"#26B0AB"} py={10} px={5} borderRadius={10}>
            <Heading color={"#025D84"}>Total Users : {Users.length ? Users.length : 0}</Heading>
          </HStack>
        </HStack>
        <Stack border={"0px solid black"} width={"80%"} mt={10}>
          <Chart
            type="pie"
            height={400}
            series={[TotalCount, TotalPlacedOrderCount, 20, Users.length]}
            options={{
              noData: { text: "Unavailable" },
              stroke: {
                lineCap: "round",
              },
              plotOptions: {
                pie: {
                  expandOnClick: true,
                },
              },
              radialBar: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
              },
              labels: [
                "TOTAL-PRODUCTS",
                "TOTAL-PLACED-ORDERS",
                "CATEGORIES",
                "TOTAL-USERS",
              ],
            }}
          ></Chart>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
