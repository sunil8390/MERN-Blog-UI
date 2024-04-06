import React, { useEffect, useState } from "react";
import Header from "../MainBlog/Header";
import Footer from "../MainBlog/Footer";
import { useSelector } from "react-redux";
import { getUser } from "../../features/User/userSlice";
import { Box, Flex, Spacer, GridItem, Grid , Badge, Avatar , Text} from "@chakra-ui/react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";


const Dashbaord = () => {
  const getCurrentUser = useSelector(getUser);
  console.log(getCurrentUser);


  const [activeComponent, setActiveComponent] = useState('allPosts');
  return (
    <>
     <Flex>
     <NavBar setActiveComponent={setActiveComponent} />
      <MainContent activeComponent={activeComponent} />
    </Flex>
    </>
  );
};

export default Dashbaord;
