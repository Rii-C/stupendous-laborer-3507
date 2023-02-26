import {
    Button,
    Image,
    Box,
    Divider,
    Stack,
    Text,
    HStack,
    Badge,
  } from "@chakra-ui/react";
  
  const PlacedOrdersCard = ({
    _id,
    ind,
    image,
    name,
    flavour,
    stock,
    category,
    discount,
    price,
    mrp,
    shipping,
    deliver,
    handleDeliver,
    handleShipping,
    page,
  }) => {
    //console.log(_id);
    return (
      <>
       <Box
       key={_id}
       style={
         ind % 2 === 0
           ? { backgroundColor: "#28bdb7",padding:"15px"}
           : { backgroundColor: "#EDF2F7",padding:"15px"}
       }
     >
     
         <Stack bg={"white"} border={"0px solid green"} justifyContent={"center"} borderRadius={10} px={5} boxShadow={"lg"} display={{base:"block",sm:"block",md:"block",lg:"none"}}  >
             <Stack
               spacing={5}
               py={3}
               border={"0px solid red"}
               alignItems={"flex-start"}
             >
              <HStack  alignItems={"flex-start"} width={"100%"} justifyContent={"space-between"} border={"0px solid red"} >
                 <Image
                   src={image[0]}
                   alt={name}
                   width={{sm:"300px",md:"300px",lg:"200px"}}
                   borderRadius={5}
                   ring={3}
                   ringColor={"#025D84"}
                 />
                 <Stack spacing={{base:0,sm:5,md:5,lg:3}} display={{base:"none",md:"flex",sm:"flex"}}  boxShadow={"md"} p={2} >
                 <HStack>
        <Text as='cite' color={"#FF8F20"} fontSize={19} fontWeight={"semibold"}>
        {name}
        </Text>
       {shipping && deliver?<Badge colorScheme='purple' display={"none"} >NEW</Badge>:<Badge colorScheme='green' >NEW</Badge>} 
        </HStack>
                 <Divider bg="#025D84" h={"1px"} />
                 <HStack justifyContent={"space-between"} display={{base:"none",sm:"flex",md:"flex",lg:"none"}} border={"0px solid black"}>
                    <Stack>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Category
                     </Text>
                     <Text color={"#025D84"} fontWeight={"semibold"}>{category}</Text>
                     </Stack>
                     <Stack>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Flavour
                     </Text>
                     <Text color={"#025D84"} fontWeight={"semibold"}>{flavour}</Text>
                     </Stack>
                     <Stack>
                     <HStack >
 {(shipping && deliver)|| (!shipping && !deliver)?<Badge colorScheme='blue' display={"none"} >PROCESSING</Badge>:<Badge colorScheme='blue'>PROCESSING</Badge>} 
 
 {deliver?<Badge colorScheme='green' >ORDER DELIVERED</Badge>:<Badge colorScheme='green'display={"none"}>DELIVERED</Badge>}
                     </HStack>
                     </Stack>
                   </HStack>
                   <HStack justifyContent={"space-between"} display={{base:"none",sm:"none",md:"none",lg:"flex"}} border={"0px solid black"}>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Category :{" "}
                       <span
                         style={{
                           color: "#025D84",
                         }}
                       >
                         {category}
                       </span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Flavour :{" "}
                       <span style={{ color: "#025D84" }}>{flavour}</span>
                     </Text>
                     <HStack >
 {(shipping && deliver)|| (!shipping && !deliver)?<Badge colorScheme='blue' display={"none"} >PROCESSING</Badge>:<Badge colorScheme='blue'>PROCESSING</Badge>} 
 
 {deliver?<Badge colorScheme='green' >ORDER DELIVERED</Badge>:<Badge colorScheme='green'display={"none"}>DELIVERED</Badge>}
                     </HStack>
                   </HStack>
                   <Divider bg="#025D84" h={"1px"} />
                   <HStack justifyContent={"space-between"} border={"0px solid black"}>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       MRP :{" "}
                       <span
                         style={{
                           textDecoration: "line-through",
                           color: "#025D84",
                         }}
                       >
                         ₹ {mrp}
                       </span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Price :{" "}
                       <span style={{ color: "#025D84" }}>₹ {price}</span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Discount :{" "}
                       <span style={{ color: "#025D84" }}>{discount}%</span>
                     </Text>
                   </HStack>
                   <Divider bg="#025D84" h={"1px"} />
                   <HStack border={"0px solid black"}  justifyContent={"space-between"}  pb={0} >
               <Button
                 bg={"white"}
                 width={100}
                 border={"2px solid #FF8F20"}
                 color={"#FF8F20"}
                 borderRadius={5}
                 _hover={{ bg: "#FF8F20", color: "white" }}
                 onClick={() => handleShipping(_id)}
               >
                 SHIPPING
               </Button>
  
               <Button
                 bg={"#FF8F20"}
                 color={"white"}
                 _hover={{
                   bg: "white",
                   color: "#FF8F20",
                   border: "2px solid #FF8F20",
                 }}
                 borderRadius={5}
               >
                 {(page - 1) * 5 + ind + 1}
               </Button>
  
               <Button
                 bg={"white"}
                 width={100}
                 border={"2px solid #FF8F20"}
                 color={"#FF8F20"}
                 borderRadius={5}
                 _hover={{ bg: "#FF8F20", color: "white" }}
                 onClick={() => handleDeliver(_id)}
               >
                 DELIVER
               </Button>
             </HStack>
                 </Stack>
                 </HStack>
               <Stack py={3} display={{base:"flex",md:"none",sm:"none"}} >
               <HStack>
        <Text as='cite' color={"#FF8F20"} fontSize={19} fontWeight={"semibold"}>
        {name}
        </Text>
       {shipping && deliver?<Badge colorScheme='purple' display={"none"} >NEW</Badge>:<Badge colorScheme='green' >NEW</Badge>} 
        </HStack>
                 <Divider bg="#025D84" h={"1px"} />
                 <Stack
                   justifyContent={"space-between"}
                   border={"0px solid red"}
                   mt={2}
                 >
                   <HStack justifyContent={"space-between"} display={{base:"flex",sm:"none",md:"none"}} border={"0px solid black"}>
                    <Stack>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Category
                     </Text>
                     <Text color={"#025D84"} fontWeight={"semibold"}>{category}</Text>
                     </Stack>
                     <Stack>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Flavour
                     </Text>
                     <Text color={"#025D84"} fontWeight={"semibold"}>{flavour}</Text>
                     </Stack>
                     <Stack>
                     <HStack >
 {(shipping && deliver)|| (!shipping && !deliver)?<Badge colorScheme='blue' display={"none"} >PROCESSING</Badge>:<Badge colorScheme='blue'>PROCESSING</Badge>} 
 
 {deliver?<Badge colorScheme='green' >ORDER DELIVERED</Badge>:<Badge colorScheme='green'display={"none"}>DELIVERED</Badge>}
                     </HStack>
                     </Stack>
                   </HStack>
                   <Divider bg="#025D84" h={"1px"} />
                   <HStack justifyContent={"space-between"} border={"0px solid black"}>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       MRP :{" "}
                       <span
                         style={{
                           textDecoration: "line-through",
                           color: "#025D84",
                         }}
                       >
                         ₹ {mrp}
                       </span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Price :{" "}
                       <span style={{ color: "#025D84" }}>₹ {price}</span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Discount :{" "}
                       <span style={{ color: "#025D84" }}>{discount}%</span>
                     </Text>
                   </HStack>
                 </Stack>
               </Stack>
             </Stack>
             <HStack border={"0px solid black"} display={{base:"flex",md:"none",sm:"none"}} justifyContent={"center"}  pb={3} >
             <Button
                 bg={"white"}
                 width={100}
                 border={"2px solid #FF8F20"}
                 color={"#FF8F20"}
                 borderRadius={5}
                 _hover={{ bg: "#FF8F20", color: "white" }}
                 onClick={() => handleShipping(_id)}
               >
                 SHIPPING
               </Button>
  
               <Button
                 bg={"#FF8F20"}
                 color={"white"}
                 _hover={{
                   bg: "white",
                   color: "#FF8F20",
                   border: "2px solid #FF8F20",
                 }}
                 borderRadius={5}
               >
                 {(page - 1) * 5 + ind + 1}
               </Button>
  
               <Button
                 bg={"white"}
                 width={100}
                 border={"2px solid #FF8F20"}
                 color={"#FF8F20"}
                 borderRadius={5}
                 _hover={{ bg: "#FF8F20", color: "white" }}
                 onClick={() => handleDeliver(_id)}
               >
                 DELIVER
               </Button>
             </HStack>
          
         </Stack>


         {/* LARGE SCREEN */}
       <Stack w={"100%"} boxShadow={"lg"} bg={"white"} borderRadius={"lg"} display={{base:"none",sm:"none",md:"none",lg:"block"}} >
          <HStack width={"100%"} spacing={0} justifyContent={"space-between"} px={3} gap={5} >
            <HStack spacing={6} border={"0px solid red"} width={"90%"} alignItems={"flex-start"} >
    <Box py={2} width={"12%"} >
      <Image
        src={image[0]}
        alt={name}
        //width={"130px"}
        borderRadius={5}
        ring={3}
        ringColor={"#025D84"}
      />
    </Box>
    <HStack py={2} width={"88%"} boxShadow={"md"} px={2} >
    <Stack spacing='3' border={"0px solid black"}  width={"100%"}  >
        <HStack>
        <Text as='cite' color={"#FF8F20"} fontSize={19} fontWeight={"semibold"}>
        {name}
        </Text>
       {shipping && deliver?<Badge colorScheme='purple' display={"none"} >NEW</Badge>:<Badge colorScheme='green' >NEW</Badge>} 
        </HStack>
        <Divider bg="#025D84" h={"0.5px"} />
        <HStack justifyContent={"space-between"} border={"0px solid black"}>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Category :{" "}
                       <span
                         style={{
                           color: "#025D84",
                         }}
                       >
                         {category}
                       </span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Flavour :{" "}
                       <span style={{ color: "#025D84" }}>{flavour}</span>
                     </Text>
                     <HStack >
 {(shipping && deliver)|| (!shipping && !deliver)?<Badge colorScheme='blue' display={"none"} >PROCESSING</Badge>:<Badge colorScheme='blue'>PROCESSING</Badge>} 
 
 {deliver?<Badge colorScheme='green' >ORDER DELIVERED</Badge>:<Badge colorScheme='green'display={"none"}>DELIVERED</Badge>}
                     </HStack>
                   </HStack>
        <Divider bg="#025D84" h={"0.5px"} />
                   <HStack justifyContent={"space-between"} border={"0px solid black"}>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       MRP :{" "}
                       <span
                         style={{
                           textDecoration: "line-through",
                           color: "#025D84",
                         }}
                       >
                         ₹ {mrp}
                       </span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Price :{" "}
                       <span style={{ color: "#025D84" }}>₹ {price}</span>
                     </Text>
                     <Text color={"#00B8B9"} fontWeight={"semibold"}>
                       Discount :{" "}
                       <span style={{ color: "#025D84" }}>{discount}%</span>
                     </Text>
                   </HStack>
      </Stack>
    </HStack>
    </HStack>
    <Stack border={"0px solid black"} >
    <Button
                 bg={"white"}
                 width={100}
                 border={"2px solid #FF8F20"}
                 color={"#FF8F20"}
                 borderRadius={5}
                 _hover={{ bg: "#FF8F20", color: "white" }}
                 onClick={() => handleShipping(_id)}
               >
                 SHIPPING
               </Button>
  
               <Button
                 bg={"#FF8F20"}
                 color={"white"}
                 _hover={{
                   bg: "white",
                   color: "#FF8F20",
                   border: "2px solid #FF8F20",
                 }}
                 borderRadius={5}
               >
                 {(page - 1) * 5 + ind + 1}
               </Button>
  
               <Button
                 bg={"white"}
                 width={100}
                 border={"2px solid #FF8F20"}
                 color={"#FF8F20"}
                 borderRadius={5}
                 _hover={{ bg: "#FF8F20", color: "white" }}
                 onClick={() => handleDeliver(_id)}
               >
                 DELIVER
               </Button>
    </Stack>
    </HStack>
  </Stack>
     </Box>
     </>
    );
  };
  
  export default PlacedOrdersCard;
  