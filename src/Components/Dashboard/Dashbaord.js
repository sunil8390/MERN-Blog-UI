import React, { useEffect } from "react";
import Header from "../MainBlog/Header";
import Footer from "../MainBlog/Footer";
import { useSelector } from "react-redux";
import { getUser } from "../../features/User/userSlice";
import { Box, Flex, Spacer, GridItem, Grid , Badge, Avatar , Text} from "@chakra-ui/react";

const Dashbaord = () => {
  const getCurrentUser = useSelector(getUser);
  console.log(getCurrentUser);
  return (
    <>

      <div>User DashBoard </div>

    </>
  );
};

export default Dashbaord;
