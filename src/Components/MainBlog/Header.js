import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import { Box, Flex, Spacer, Avatar, Text, Badge } from '@chakra-ui/react';
import { getIsLogin, removeToken } from '../Accounts/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getUser } from '../../features/User/userSlice';

const Header = () => {
  const navigate = useNavigate()
    
  const user = useSelector(getUser);
  console.log(user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogoutUser = ()=> {
    console.log('logout');
    removeToken();
    setIsLoggedIn(false);
    navigate('/')
  }

  useEffect(()=>{
    setIsLoggedIn(getIsLogin())
    console.log("Header Ca;;ing");
  })

    return (
      <Flex p="4" bg="teal.500" color="white">
        {/* Logo and Text */}
        <Box>
          <Link to="/">
            <Box fontSize="xl" fontWeight="bold">
              BlogSpot
            </Box>
            <Box fontSize="sm">write your Own</Box>
          </Link>
        </Box>

        <Spacer />

        {/* Login and Signup Buttons */}
        <Box>
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <Button variant="outline" colorScheme="white" mr="2">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button colorScheme="white">Sign up</Button>
              </Link>
            </>
          ) : (
            <>
              <Flex>
                {/* <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3" mr="3">
                  <Text fontWeight="bold">
                    {user ? user.UserName: ""} 
                    
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Text>
                  <Text fontSize="sm">UI Engineer</Text>
                </Box> */}

               
              <Link to="/">
                <Button variant="outline" colorScheme="white" mr="2">
                  Home
                </Button>
              </Link>

              <Link to="/dashboard">
                <Button variant="outline" colorScheme="white" mr="2">
                  Dashbaord
                </Button>
              </Link>
              <Button
                variant="outline"
                colorScheme="white"
                mr="2"
                onClick={onLogoutUser}
              >
                Logout
              </Button>

              </Flex>

              
            </>
          )}
        </Box>
      </Flex>
    );
  };

  export default Header;