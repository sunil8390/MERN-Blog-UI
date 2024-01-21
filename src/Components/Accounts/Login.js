import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "../MainBlog/Header";
import Footer from "../MainBlog/Footer";
import { color } from "framer-motion";
import { Link } from "react-router-dom";
import axios from 'axios';
import { setToken, getToken, removeToken, getIsLogin} from './auth'
import Dashbaord from "../Dashboard/Dashbaord";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SetUser, getUser } from "../../features/User/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();



  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (data) => {
    debugger;
    let userdata = {
      email: data.Username,
      password: data.Password,
    };
  
    try {
      const response = await axios.post(`http://localhost:4000/api/login`, userdata);
      console.log(`Login success response`, response.data.user);
      await setToken(response.data.token);
  
      if (getIsLogin()) {
        console.log("IS login Done");
        dispatch(SetUser(response.data.user));
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error.response?.status);
  
      if (error.response?.status === 401) {
        alert(`Credentials are incorrect`);
      }
    }
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Center flex="1" bg="white" color="white">
        <Card width="400px" p={4} my={5}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <CardHeader>
              <Heading size="md">Login</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing={3}>
                <Input
                  placeholder="Username"
                  {...register("Username", { required: "Enter your username" })}
                />
                {errors.Username && (
                  <p style={{ color: "red" }} role="alert">
                    {errors.Username.message}
                  </p>
                )}
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("Password", {
                      required: "Enter your password",
                    })}
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.Password && (
                  <p style={{ color: "red" }} role="alert">
                    {errors.Password.message}
                  </p>
                )}
              </Stack>
            </CardBody>
            <CardFooter mt={4} justify="right">
              <Button type="submit" colorScheme="teal">
                Log In
              </Button>
            </CardFooter>
          </form>
          <Flex>
            <Spacer />
            <Link to="/signup">
              <Text
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
                mr={2}
              >
                {" "}
                Create new account
              </Text>
            </Link>
            <Link to="/signup">
              <Text
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
                mr={2}
              >
                Forgot password
              </Text>
            </Link>
          </Flex>
        </Card>
      </Center>
    </Box>
  );
};

export default Login;
