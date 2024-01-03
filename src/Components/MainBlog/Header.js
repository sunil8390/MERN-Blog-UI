
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box, Flex, Spacer } from '@chakra-ui/react';

const Header = () => {
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
        <Link to="/login">
          <Button variant="outline" colorScheme="white" mr="2">
            Login
          </Button>
          </Link>
          <Link to="/signup">
          <Button colorScheme="white">Sign up</Button>
          </Link>
        </Box>
      </Flex>
    );
  };

  export default Header;