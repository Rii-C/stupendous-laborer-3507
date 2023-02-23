import { Box } from '@chakra-ui/react'
import React from 'react';
import Chart from "react-apexcharts";
import AdminNavbar from '../../components/AdminComponents/AdminNavbar'

const AdminDashboard = () => {
  return (
    <Box>
      <AdminNavbar/>
      <Box display={{sm:"none",md:"none",base:"block"}} >
        <Chart
            type="radialBar"
            height={300}
            series={[
              100, 100, 20
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
                // dataLabels: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
                // }
              },
              labels: [
               "TOTAL-PRODUCTS","TOTAL-PLACED-ORDERS","TOTAL-CATEGORIES"
              ],
            }}
          ></Chart>
      </Box>
      <Box display={{base:"none",sm:"block",md:"block"}} >
        <Chart
            type="radialBar"
            height={500}
            series={[
              100, 50, 20
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
                // dataLabels: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
                // }
              },
              labels: [
               "TOTAL-PRODUCTS","TOTAL-PLACED-ORDERS","TOTAL-CATEGORIES"
              ],
            }}
          ></Chart>
      </Box>
    </Box>
  )
}

export default AdminDashboard
