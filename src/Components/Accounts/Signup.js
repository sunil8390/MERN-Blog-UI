import React, { useState } from "react";
import Header from "../MainBlog/Header";
import Footer from "../MainBlog/Footer";
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
  Link
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Signup = () => {
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
    // Handle login logic here
   alert(JSON.stringify(data));
  };

  return (
    <div>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Center flex="1" bg="white" color="white">
          <Card width="400px" p={4} my={5}>
          <form onSubmit={handleSubmit(handleSignup)}>
            <CardHeader>
              <Heading size="md">Sign Up</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing={3}>
                <Input placeholder="Username" {...register("Username", { required: "Enter your username" })}/>
                {errors.Username && (
                  <p style={{ color: "red" }} role="alert">
                    {errors.Username.message}
                  </p>
                )}
                <Input placeholder="Email"   {...register("Email", { required: "Enter your email" })}/>
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
                    {...register("Password", { required: "Enter your Password" })}
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
                    {...register("CPassword", { required: "Enter your CPassword" })}
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
            <CardFooter mt={4} justify="right">
              <Button type="submit" colorScheme="teal">Sign Up</Button>
            </CardFooter>
            </form>
            <Flex>
            <Spacer />
            <Link to="/login"> 
              <Text
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
                mr={2}
              >
                {" "}
                Already i have account
              </Text>
            </Link>
            
          </Flex>
          </Card>
        </Center>
        <Footer />
      </Box>
    </div>
  );
};
export default Signup;
