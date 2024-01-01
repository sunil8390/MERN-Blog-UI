

import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box, Flex, Spacer } from '@chakra-ui/react';

const Header = () => {
    return (
      <Flex p="4" bg="teal.500" color="white">
        {/* Logo and Text */}
        <Box>
          <Box fontSize="xl" fontWeight="bold">
            BlogSpot
          </Box>
          <Box fontSize="sm">write your Own</Box>
        </Box>
  
        <Spacer />
  
        {/* Login and Signup Buttons */}
        <Box>
          <Button variant="outline" colorScheme="white" mr="2">
            Login
          </Button>
          <Button colorScheme="white">Sign up</Button>
        </Box>
      </Flex>
    );
  };

  export default Header;