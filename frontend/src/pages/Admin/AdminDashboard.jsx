import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from '../../components/AdminComponents/AdminNavbar'
import { getProductData, getUserData } from '../../redux/Admin/Admin.action';

const AdminDashboard = () => {
const dispatch = useDispatch();
const {Product,Users} = useSelector((store)=>store.adminReducer);
    useEffect(()=>{
        dispatch(getProductData());
        dispatch(getUserData());
      },[])
     // console.log(Product.length,Users.length);
  return (
    <Box>
      <AdminNavbar/>
     <Flex flexDirection={"column"} mt={100} display={{sm:"none",md:"none",base:"block"}} >
     <Stack border={"0px solid black"} justifyContent={"space-between"} px={5} >
            <HStack boxShadow={"lg"} py={5} px={5} borderRadius={10} >
            <Text fontSize={30} fontWeight={'semibold'} textAlign={"center"} >Total Products : {Product.length?Product.length:0}</Text></HStack>
            <HStack boxShadow={"lg"} py={5} px={5} borderRadius={10} ><Text fontSize={30} fontWeight={'semibold'} textAlign={"center"}>Total Placed Orders : 0</Text></HStack>
            <HStack boxShadow={"lg"} py={5} px={5} borderRadius={10} ><Text fontSize={30} fontWeight={'semibold'} textAlign={"center"}>Total Users : {Users.length?Users.length:0}</Text></HStack>
        </Stack>
        <Stack></Stack>
      <Box >
        <Chart
            type="pie"
            height={350}
            series={[
              Product.length, 100, 20, Users.length
            ]}
            options={{
              noData: { text: "Unavailable" },
              stroke: {
                lineCap: "round",
              },
              plotOptions: {
                pie: {
                  expandOnClick: true
                }
              },
              radialBar: {
               
                total: {
                  show: true,
                  label: "TOTAL",
                },
                
              },
              labels: [
               "PRODUCTS","PLACED-ORDERS","CATEGORIES","USERS"
              ],
            }}
          ></Chart>
      </Box>
      </Flex>
      <Flex display={{base:"none",sm:"block",md:"block"}} mt={100} border={"0px solid black"} >
        <HStack border={"0px solid black"} justifyContent={"space-between"} px={5} >
            <HStack boxShadow={"lg"} py={10} px={5} borderRadius={10} >
            <Heading>Total Products : {Product.length?Product.length:0}</Heading></HStack>
            <HStack boxShadow={"lg"} py={10} px={5} borderRadius={10} ><Heading>Total Placed Orders : 0</Heading></HStack>
            <HStack boxShadow={"lg"} py={10} px={5} borderRadius={10} ><Heading>Total Users : {Users.length?Users.length:0}</Heading></HStack>
        </HStack>
        <Stack  border={"0px solid black"} width={"80%"} mt={10} >
        <Chart
            type="pie"
            height={400}
            series={[
                Product.length, 50, 20, Users.length
            ]}
            options={{
              noData: { text: "Unavailable" },
              stroke: {
                lineCap: "round",
              },
              plotOptions: {
                pie: {
                  expandOnClick: true
                }
              },
              radialBar: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
              },
              labels: [
               "PRODUCTS","PLACED-ORDERS","CATEGORIES","USERS"
              ],
            }}
          ></Chart>
          </Stack>
      </Flex>
     
    </Box>
  )
}

export default AdminDashboard
