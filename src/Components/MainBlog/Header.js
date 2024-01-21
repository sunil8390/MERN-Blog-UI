import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Box, Flex, Spacer, Avatar, Text, Badge } from "@chakra-ui/react";
import { getIsLogin, removeToken } from "../Accounts/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../features/User/userSlice";
import { HeadNav } from "./Navigation";
import { HeadButtons } from "./HeadersButtons";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(getUser);
  // console.log(user);
  console.log(HeadNav);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = (buttonName) => {
    // Add your logic here based on the button click
    if (buttonName === "logout") {
      console.log("logout");
      removeToken();
      setIsLoggedIn(false);
      navigate("/");
    } else if (buttonName === "SignUp") {
    } else {
    }
  };



  useEffect(() => {
    setIsLoggedIn(getIsLogin());
    console.log("Header Ca;;ing");
  });

  return (
    <Flex p="4" bg="teal.500" color="white">
      {/* Logo and Text */}
      <Box>
        <Link to="/">
          <Box fontSize="xl" fontWeight="bold">
            BlogSpot
          </Box>
          <Box fontSize="sm">write your thoughts</Box>
        </Link>
      </Box>

      <Spacer />

      <Box>
      {HeadNav.filter((n) => (n.isPrivate === isLoggedIn || n.public === true))
        .map((nav) => (
          <Link to={nav.path} key={nav.name}>
            <Button
              onClick={() => handleButtonClick(nav.action)}
              variant="outline"
              colorScheme="white"
              mr="2"
            >
              {nav.name}
            </Button>
          </Link>
        ))
}



        {HeadButtons.filter((hbtn)=> hbtn.isPrivate == isLoggedIn).map((headbtn)=>(

           <Button
           onClick={() => handleButtonClick(headbtn.action)}
           variant="outline"
           colorScheme="white"
           mr="2"
         >
           {headbtn.btnName}
         </Button>
        ))}
      </Box>
    </Flex>
  );
};

export default Header;
