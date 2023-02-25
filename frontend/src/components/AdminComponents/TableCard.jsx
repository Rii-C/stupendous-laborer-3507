import { Button, Td, Tr, Image, Divider, CardFooter, ButtonGroup, Heading, Stack, CardBody, Card, Text, HStack, Box } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
const Tablecard = ({
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
  handleDelete,
  handleOpen,
}) => {
  //console.log(_id);
  return (
    <Tr key={_id} style={ind%2===0?{backgroundColor:"#00B8B9"}:{backgroundColor:"#EDF2F7"}} >
       <Td>{ind + 1}</Td>
      {/* <Td>{ind + 1}</Td>

      <Td>
        <Image
          src={image[0]}
          alt={name}
          borderRadius={5}
          ring={3}
          ringColor={"#025D84"}
        />
      </Td>
      <Td>{name}</Td>
      <Td>{flavour}</Td>
      <Td>{category}</Td>
      <Td textDecoration={"line-through"}>₹ {mrp}</Td>
      <Td>{price}</Td>
      <Td>`${discount}%`</Td>
      <Td>{stock}</Td>
      <Td>
        <Button
          bg={"#72749B"}
          color={"white"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleOpen(_id)}
        >
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button
          bg={"#72749B"}
          color={"white"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleDelete(_id)}
        >
          <DeleteIcon />
        </Button>
      </Td> */}
      <Td>
      <Card w={"100%"} boxShadow={"lg"} >
        <HStack width={"100%"} spacing={0} justifyContent={"space-between"} px={3} gap={5} >
          <HStack spacing={4} border={"1px solid red"} alignItems={"flex-start"} >
  <Box py={2} >
    <Image
      src={image[0]}
      alt={name}
      width={"100px"}
      borderRadius={5}
      ring={3}
      ringColor={"#025D84"}
    />
  </Box>
  <HStack py={2} >
  <Stack spacing='3' border={"1px solid black"}  >
      <Text>
      {name}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
    <Divider />
  </HStack>
  </HStack>
  <Stack border={"0px solid black"} >
      <Button variant='solid' bg={"#FF8F20"} color={"white"} borderRadius={5} >
        UPDATE
      </Button>
      
      <Button variant='ghost' bg={"#FF8F20"} color={"white"} borderRadius={5}>
        DELETE
      </Button>
  </Stack>
  </HStack>
</Card>
      </Td>
    </Tr>
  );
};

export default Tablecard;
