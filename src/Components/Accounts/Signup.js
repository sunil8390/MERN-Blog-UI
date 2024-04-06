import React, { useState } from "react";

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
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (data) => {
    let autherObj = {
      Name: data.Name,
      UserName: data.Username,
      Email: data.Email,
      Password: data.Password,
    };
    //  const token = getToken();
    axios
      .post("http://localhost:4000/auther/create", autherObj)
      .then((res) => {
        console.log("Auther Created", res.data);
        alert("Account is created, please login..");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error Create Auther");
      });
  };

  return (
      <Box minHeight="80vh" display="flex" flexDirection="column">
        <Center flex="1" bg="white" color="white">
          <Card width="400px" p={4} my={5}>
            <form onSubmit={handleSubmit(handleSignup)}>
              <CardHeader>
                <Heading size="md">Sign Up</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={3}>
                  <Input
                    placeholder="Name"
                    {...register("Name", { required: "Enter your name" })}
                  />
                  {errors.Name && (
                    <p style={{ color: "red" }} role="alert">
                      {errors.Name.message}
                    </p>
                  )}
                  <Input
                    placeholder="Username"
                    {...register("Username", {
                      required: "Enter your username",
                    })}
                  />
                  {errors.Username && (
                    <p style={{ color: "red" }} role="alert">
                      {errors.Username.message}
                    </p>
                  )}
                  <Input
                    placeholder="Email"
                    {...register("Email", { required: "Enter your email" })}
                  />
                  {errors.Email && (
                    <p style={{ color: "red" }} role="alert">
                      {errors.Email.message}
                    </p>
                  )}
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...register("Password", {
                        required: "Enter your Password",
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

                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Comfirm Password"
                      {...register("CPassword", {
                        required: "Enter your CPassword",
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
                  {errors.CPassword && (
                    <p style={{ color: "red" }} role="alert">
                      {errors.CPassword.message}
                    </p>
                  )}
                </Stack>
              </CardBody>
              <CardFooter mt={0} justify="right">
                <Button type="submit" colorScheme="teal">
                  Sign Up
                </Button>
              </CardFooter>
            </form>
            <Flex>
              <Link to="/login">
                <Text> Already i have account</Text>
              </Link>
            </Flex>
          </Card>
        </Center>
      </Box>
  );
};
export default Signup;
