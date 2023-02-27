import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../../redux/Authentication/action";

const obj = {
  email: "",
  password: "",
  status:false
};
const Logging = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [text, setText] = useState(obj);


  const navigate = useNavigate()

  const handleChange = (e) => {
      const { type, checked, value, name } = e.target;
      const inputValue = type === "checkbox" ? checked : value;
    setText({...text, [name]: inputValue});
  };



  const {email, password,status} = text;
  
    // console.log("ok",text)
  const handleSubmit = async() => {
    if (email !== "" && password !== "") {
      if(email==="s@gmail.com" && password === "s12345"){
        console.log("admin")
        return navigate("/admin/dashboard")
      }else{
        setLoad(true);
      await axios.post("https://outstanding-outfit-seal.cyclic.app/user/login",{email:email,password:password,status:status})
          .then((res) => {
            setLoad(false);
            toast({
              title: "Logged in",
              position: "bottom-right",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            localStorage.setItem("token",res.data.token)
            console.log(res.data.token)
            dispatch(isAuth(res.data.token));
            return navigate("/")
          })
          .catch((err) => {
            setLoad(false);
            console.log(err);
            toast({
              title: "Invalid credentials",
              position: "bottom-right",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            
          });
        setText(obj);
      }
    } else {
      toast({
        title: "Input fields first",
        position: "bottom-right",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
     
    }
  };

  return (
    <Stack direction={{base: "column", md: "row"}}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={handleChange}
              value={email}
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              onChange={handleChange}
              value={password}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{base: "column", sm: "row"}}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox
                name="status"
                onChange={handleChange}
                type="checkbox"
                checked={status}
              >
                Remember me
              </Checkbox>
              {/* <Link href={"/"} color={"blue.500"}>
                Forgot password?
              </Link> */}
            <Link to='/signup'>
              <Text textAlign={"end"} fontWeight={400} color={"blue"}>Click here to Register</Text>
            </Link>
            </Stack>

            <Button
              onClick={handleSubmit}
              colorScheme={"blue"}
              variant={"solid"}
              >
              {load ? <Spinner /> : "Sign in"}
            </Button>


          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          loading="lazy"
          objectFit={"cover"}
          borderRadius={"2rem"}
          w={"90%"}
          m="auto"
          mt={3}
          src={
            "https://media.istockphoto.com/id/1312423123/vector/online-registration-and-sign-up-concept-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=0q20WWwJg9fvmKuGBn4IC68zzd4J65X88B9XnC-37h0="
          }
        />
      </Flex>
    </Stack>
  );
};
export default Logging;