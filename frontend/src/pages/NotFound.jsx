import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


 function NotFound() {
  const navigate = useNavigate();
  return (
    <Box mt={"150px"} textAlign="center" py={10} px={6}>
      <Heading
        fontSize="100px"
        display="inline-block"
        as="h1"
        bgGradient="linear( #28C2C4, #025D84)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text
        fontSize="40px"
        bgGradient="linear( #28C2C4, #025D84)"
        backgroundClip="text"
        mt={3}
        mb={2}
      >
        Page Not Found
      </Text>
      <Text
        color={"gray.500"}
        bgGradient="linear(#28C2C4, #025D84)"
        backgroundClip="text"
        mb={6}
      >
        The page you're looking for does not seem to exist
      </Text>
      <Link to="/" 
       _hover={{
        textDecoration:"none",
      }}
      >
        {" "}
        <Button
          onClick={() => navigate("/")}
          padding="24px"
          style={{ fontSize: "17px" }}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#FF8F20"}
          _hover={{
            bg: "white",
            color:"#FF8F20",
            border:"2px solid #FF8F20",
            textDecoration:"none",
          }}
        >
          Home
        </Button>
      </Link>
   
 </Box>
);
}

export default NotFound;