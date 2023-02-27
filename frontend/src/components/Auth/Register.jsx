import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Spinner,
    Stack,
    Text,
    useToast,
  } from '@chakra-ui/react'
  import axios from 'axios'
  
  import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
  
  const obj = {
    name: '',
    username: '',
    email: "",
    password: '',
    gender : "",
    phone: '',

  }
  const Registering = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)
    const [text, setText] = useState(obj)
  
    const handleChange = (e) => {
      const { value, name } = e.target
      setText({ ...text, [name]: value })
    }
  
    const { email, password, name, phone, username, gender } = text
  
    const handleSubmit = async () => {
      console.log('ok', text)
      if (email !== '' && password !== '' && name !== '' && username !== '' && gender !== '' && phone !== '' ) {
        setLoad(true)
        await axios.post('https://outstanding-outfit-seal.cyclic.app/user/register', text)
          .then((res) => {
            setLoad(false)
            console.log(res)
            toast({
              title: 'User registered',
              position: 'bottom-right',
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            return navigate("/login")
          })
          .catch((err) => {
            setLoad(false)
            console.log(err)
            toast({
              title: 'User is already registered',
              position: 'bottom-right',
              status: 'error',
              duration: 1000,
              isClosable: true,
            })
          })
  
        setText(obj)
      } else {
        toast({
          title: 'Input fields first',
          position: 'bottom-right',
          status: 'warning',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  
    return (
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                onChange={handleChange}
                value={text.name}
                type="text"
                isRequired={true}
              />
            </FormControl>
            <FormControl id="username">
              <FormLabel> Username</FormLabel>
              <Input
                name="username"
                onChange={handleChange}
                value={text.username}
                type="text"
                isRequired={true}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={handleChange}
                value={text.email}
                name="email"
                type="email"
                isRequired={true}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                onChange={handleChange}
                value={text.password}
                type="password"
                isRequired={true}
              />
            </FormControl>
            <FormControl id="gender">
              <FormLabel>Gender</FormLabel>
              <Select onChange={handleChange} placeholder='Select gender' name="gender">
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </Select>
            </FormControl>
            <FormControl id="phone">
              <FormLabel>phone</FormLabel>
              <InputGroup>
                <InputLeftAddon children='+91'/>
                <Input type='number'
                  name="phone"
                  onChange={handleChange}
                  value={text.phone}
                  />
              </InputGroup>
            </FormControl><br/>

            <Link to='/login'>
              <Text textAlign={"end"} fontWeight={400} color={"blue"}>Click here if already register</Text>
            </Link>
  
            <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
              {load ? <Spinner /> : 'Sign up'}
            </Button>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            loading="lazy"
            objectFit={'cover'}
            borderRadius={'2rem'}
            w={'90%'}
            src={
              'https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=900'
            }
          />
        </Flex>
      </Stack>
    )
  }
  export default Registering