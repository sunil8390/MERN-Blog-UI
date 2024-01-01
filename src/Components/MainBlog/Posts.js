import React, { useEffect, useState } from "react";
import { Flex, Card, Image, Heading, Text, CardBody, Stack, SimpleGrid, } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../features/Posts/postsSlice";

import AuthorsDB from "./TempDataBase/AuthorDB";
import CategoriesDB from "./TempDataBase/CategoriesDB";

export const Posts = ({ selectedCat }) => {
  const allPostsState = useSelector(getAllPosts);
  console.log(allPostsState);

  const filteredPosts = selectedCat ? allPostsState.filter((post) => post.categoryId === selectedCat) : allPostsState;
  
  if (filteredPosts === null) {
    return <div>Loading...</div>;
  }

  return (
    <Flex justify="center" align="center">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {filteredPosts.map((post) => (
          <Card key={post.id} maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{post.title}</Heading>
                <Text>{post.content}</Text>
              </Stack>
              <Badge mr={2}>{getCategoryName(post.categoryId)}</Badge>
              <Badge>{getAutherName(post.authorId)}</Badge>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const getCategoryName = (categoryId) => {
  const category = CategoriesDB.find((category) => category.id === categoryId);
  return category ? category.categoryName : "Uncategorized";
};

const getAutherName = (AuthId) => {
  let auther = AuthorsDB.find((auth) => auth.id === AuthId);
  return auther ? auther.name : "";
};
