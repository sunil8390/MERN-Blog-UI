import React from "react";
import { Flex, Spacer, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex mt="4" bg="teal.500" color="white">
    <Box p="2" h="10">
      Footer
    </Box>
    <Spacer />
    <Box p="2" h="10">
      Footer for Blog Clone Site React
    </Box>
    <Spacer />
    <Box p="2" h="10">
      {/* You can add more content here */}
    </Box>
  </Flex>
  );
};

export default Footer;
